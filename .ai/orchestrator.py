"""
AI Product Team Orchestrator
============================
Production-grade agent system using Google Gemini + Veo.

Agents:
  - UX Designer: visual audit & improvements
  - Frontend Engineer: code quality & performance
  - SEO Specialist: search optimization
  - QA Engineer: bug detection
  - Content Architect: messaging & IA

Capabilities:
  - Gemini 2.5 Flash for analysis & structured output
  - Veo 3 for video/image generation
  - State tracking across cycles
  - Build validation gate
"""

import os
import sys
import json
import time
import subprocess
import glob
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

# Load .env from project root
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

from google import genai
from google.genai import types

# ─── CONFIG ─────────────────────────────────────────────────────
PROJECT_ROOT = Path(__file__).resolve().parent.parent
AGENTS_DIR = Path(__file__).resolve().parent / "agents"
MEMORY_DIR = Path(__file__).resolve().parent / "memory"
STATE_FILE = MEMORY_DIR / "state.json"

GEMINI_MODEL = "gemini-2.0-flash"
VEO_MODEL = "veo-2.0-generate-001"

SCAN_EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".css", ".json", ".md", ".html"}
SKIP_DIRS = {"node_modules", "dist", ".git", ".ai", "__pycache__"}

AGENTS = [
    "ux_designer",
    "frontend_engineer",
    "seo_specialist",
    "qa_engineer",
    "content_architect",
]


# ─── GEMINI CLIENT ──────────────────────────────────────────────
def get_client():
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("❌ GOOGLE_API_KEY not found in environment. Add it to .env")
        sys.exit(1)
    return genai.Client(api_key=api_key)


# ─── REPO SCANNER ───────────────────────────────────────────────
def scan_repo():
    """Scan repository for source files, returning {path: content}."""
    files = {}
    for root, dirs, filenames in os.walk(PROJECT_ROOT):
        # Skip irrelevant directories
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in filenames:
            if Path(f).suffix in SCAN_EXTENSIONS:
                filepath = Path(root) / f
                rel = filepath.relative_to(PROJECT_ROOT)
                try:
                    content = filepath.read_text(encoding="utf-8", errors="ignore")
                    if len(content) < 20_000:  # Skip huge files
                        files[str(rel)] = content
                except Exception:
                    pass
    return files


def build_context(files: dict, max_chars: int = 80_000) -> str:
    """Build a context string from scanned files, truncated to fit."""
    context = []
    total = 0
    for path, content in sorted(files.items()):
        entry = f"\n--- {path} ---\n{content}\n"
        if total + len(entry) > max_chars:
            break
        context.append(entry)
        total += len(entry)
    return "".join(context)


# ─── STATE MANAGEMENT ───────────────────────────────────────────
def load_state() -> dict:
    MEMORY_DIR.mkdir(parents=True, exist_ok=True)
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {
        "cycles": 0,
        "last_run": None,
        "history": [],
        "total_issues_found": 0,
        "total_issues_fixed": 0,
    }


def save_state(state: dict):
    MEMORY_DIR.mkdir(parents=True, exist_ok=True)
    STATE_FILE.write_text(json.dumps(state, indent=2, default=str))


# ─── AGENT RUNNER ───────────────────────────────────────────────
MAX_RETRIES = 5
INITIAL_RETRY_DELAY = 5  # seconds — fast start

def run_agent(client, agent_name: str, repo_context: str) -> dict | None:
    """Run a single specialist agent with auto-retry on rate limits."""
    prompt_path = AGENTS_DIR / f"{agent_name}.md"
    if not prompt_path.exists():
        print(f"  ⚠️  Agent prompt not found: {prompt_path}")
        return None

    system_prompt = prompt_path.read_text(encoding="utf-8")

    print(f"  🔍 Running {agent_name}...")

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            response = client.models.generate_content(
                model=GEMINI_MODEL,
                contents=f"Review this codebase and provide your analysis:\n\n{repo_context}",
                config=types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    temperature=0.3,
                    max_output_tokens=4096,
                    response_mime_type="application/json",
                ),
            )

            # Parse JSON from response
            text = response.text.strip()
            if text.startswith("```"):
                text = text.split("\n", 1)[1].rsplit("```", 1)[0].strip()

            result = json.loads(text)
            issues_key = "issues" if "issues" in result else "bugs"
            count = len(result.get(issues_key, []))
            score = result.get("score", "?")
            print(f"  ✅ {agent_name}: score {score}/10, {count} findings")
            return result

        except json.JSONDecodeError as e:
            print(f"  ⚠️  {agent_name}: couldn't parse JSON ({e})")
            return {"raw_response": response.text if response else "", "parse_error": str(e)}

        except Exception as e:
            err = str(e)
            if "429" in err or "RESOURCE_EXHAUSTED" in err:
                delay = INITIAL_RETRY_DELAY * (2 ** (attempt - 1))  # 5s, 10s, 20s, 40s, 80s
                print(f"  ⏳ Rate limited — retry {attempt}/{MAX_RETRIES} in {delay}s...")
                time.sleep(delay)
                continue
            else:
                print(f"  ❌ {agent_name} failed: {e}")
                return None

    print(f"  ❌ {agent_name}: exhausted all retries")
    return None


# ─── VEO VIDEO GENERATION ───────────────────────────────────────
def generate_hero_video(client) -> str | None:
    """Generate a short ambient video for the hero section background."""
    print("\n🎬 Generating hero background video with Veo...")

    try:
        operation = client.models.generate_videos(
            model=VEO_MODEL,
            prompt=(
                "Abstract, slow-moving gradient mesh animation. "
                "Soft indigo (#6B5EF8) and teal (#0DCFBA) colors flowing organically. "
                "Minimal, premium feel. Dark background with luminous color blobs. "
                "Suitable as a website hero background. Subtle, not distracting. "
                "No text, no objects, just abstract flowing light."
            ),
            config=types.GenerateVideosConfig(
                person_generation="dont_allow",
                aspect_ratio="16:9",
                number_of_videos=1,
            ),
        )

        # Poll for completion
        print("  ⏳ Waiting for video generation...")
        while not operation.done:
            time.sleep(10)
            operation = client.operations.get(operation)

        if operation.result and operation.result.generated_videos:
            video = operation.result.generated_videos[0]
            video_data = client.files.download(file=video.video)

            output_path = PROJECT_ROOT / "public" / "hero-bg.mp4"
            output_path.write_bytes(video_data)
            print(f"  ✅ Hero video saved to: {output_path}")
            return str(output_path)
        else:
            print("  ⚠️  No video generated")
            return None

    except Exception as e:
        print(f"  ❌ Veo generation failed: {e}")
        print(f"     (This is expected if your API key doesn't have Veo access)")
        return None


# ─── IMAGE GENERATION (GEMINI NATIVE) ───────────────────────────
def generate_og_image(client) -> str | None:
    """Generate an OG image for social sharing using Gemini's native image gen."""
    print("\n🖼️  Generating OG social image with Gemini...")

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",
            contents=(
                "Generate a professional Open Graph image for a portfolio website. "
                "Name: Greg Homstad. Title: Technical Business Analyst. "
                "Style: minimal, premium, dark background with subtle indigo (#6B5EF8) "
                "and teal (#0DCFBA) gradient accents. Modern sans-serif typography. "
                "1200x630 dimensions."
            ),
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data and part.inline_data.mime_type.startswith("image/"):
                output_path = PROJECT_ROOT / "public" / "og-generated.png"
                output_path.write_bytes(part.inline_data.data)
                print(f"  ✅ OG image saved to: {output_path}")
                return str(output_path)

        print("  ⚠️  No image in response")
        return None

    except Exception as e:
        print(f"  ⚠️  Image generation failed: {e}")
        return None


# ─── BUILD VALIDATOR ────────────────────────────────────────────
def validate_build() -> bool:
    """Run npm build and return True if it passes."""
    print("\n🔨 Validating build...")
    result = subprocess.run(
        ["npm", "run", "build"],
        cwd=PROJECT_ROOT,
        capture_output=True,
        text=True,
        shell=True,
    )
    if result.returncode == 0:
        print("  ✅ Build passed")
        return True
    else:
        print(f"  ❌ Build failed:\n{result.stderr[:500]}")
        return False


# ─── REPORT GENERATOR ──────────────────────────────────────────
def generate_report(results: dict, state: dict, video_path: str | None):
    """Generate a markdown report from all agent findings."""
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report_path = MEMORY_DIR / f"report_{timestamp}.md"

    lines = [
        f"# AI Product Team Report",
        f"**Cycle #{state['cycles']}** — {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "",
    ]

    total_issues = 0
    for agent_name, result in results.items():
        if not result:
            continue

        lines.append(f"## {agent_name.replace('_', ' ').title()}")
        score = result.get("score", "?")
        summary = result.get("summary", "No summary")
        lines.append(f"**Score:** {score}/10")
        lines.append(f"**Summary:** {summary}")
        lines.append("")

        issues_key = "issues" if "issues" in result else "bugs"
        issues = result.get(issues_key, [])
        total_issues += len(issues)

        if issues:
            lines.append("| Severity | Issue | Fix |")
            lines.append("|----------|-------|-----|")
            for issue in issues[:10]:  # Cap at 10 per agent
                sev = issue.get("severity", "?")
                prob = issue.get("problem", issue.get("description", "?"))
                fix = issue.get("suggestion", issue.get("fix", "?"))
                lines.append(f"| {sev} | {prob} | {fix} |")
            lines.append("")

    if video_path:
        lines.append(f"## Generated Media")
        lines.append(f"- Hero video: `{video_path}`")
        lines.append("")

    lines.append(f"---")
    lines.append(f"*Total issues found this cycle: {total_issues}*")
    lines.append(f"*Cumulative issues found: {state['total_issues_found'] + total_issues}*")

    report_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"\n📄 Report saved: {report_path}")

    state["total_issues_found"] += total_issues
    return total_issues


# ─── MAIN ORCHESTRATOR ──────────────────────────────────────────
def run_cycle(include_media: bool = False):
    """Run one full improvement cycle."""
    print("=" * 60)
    print("🚀 AI PRODUCT TEAM — IMPROVEMENT CYCLE")
    print("=" * 60)

    client = get_client()
    state = load_state()
    state["cycles"] += 1
    state["last_run"] = datetime.now().isoformat()

    # 1. Scan repo
    print("\n📁 Scanning repository...")
    files = scan_repo()
    print(f"  Found {len(files)} source files")
    context = build_context(files)

    # 2. Run all agents
    print("\n🤖 Running specialist agents...\n")
    results = {}
    for agent in AGENTS:
        results[agent] = run_agent(client, agent, context)

    # 3. Generate media (optional)
    video_path = None
    if include_media:
        video_path = generate_hero_video(client)
        generate_og_image(client)

    # 4. Validate build
    build_ok = validate_build()

    # 5. Generate report
    total_issues = generate_report(results, state, video_path)

    # 6. Save state
    state["history"].append({
        "cycle": state["cycles"],
        "timestamp": state["last_run"],
        "issues_found": total_issues,
        "build_passed": build_ok,
        "agents_run": list(results.keys()),
    })
    save_state(state)

    # 7. Summary
    print("\n" + "=" * 60)
    print("📊 CYCLE SUMMARY")
    print("=" * 60)
    print(f"  Cycle:        #{state['cycles']}")
    print(f"  Issues found: {total_issues}")
    print(f"  Build status: {'✅ PASS' if build_ok else '❌ FAIL'}")
    print(f"  Agents run:   {len(results)}")
    if video_path:
        print(f"  Media:        Hero video generated")
    print("=" * 60)


def run_continuous(interval_minutes: int = 30, include_media: bool = False):
    """Run improvement cycles continuously."""
    while True:
        run_cycle(include_media=include_media)
        print(f"\n⏳ Next cycle in {interval_minutes} minutes...\n")
        time.sleep(interval_minutes * 60)


# ─── CLI ────────────────────────────────────────────────────────
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="AI Product Team Orchestrator")
    parser.add_argument("command", nargs="?", default="run",
                        choices=["run", "loop", "media", "video", "status"],
                        help="Command to execute")
    parser.add_argument("--interval", type=int, default=30,
                        help="Minutes between cycles (for 'loop' command)")
    parser.add_argument("--agent", type=str, default=None,
                        help="Run a single agent (e.g., 'ux_designer')")

    args = parser.parse_args()

    if args.command == "run":
        if args.agent:
            # Single agent mode
            client = get_client()
            files = scan_repo()
            context = build_context(files)
            result = run_agent(client, args.agent, context)
            if result:
                print(json.dumps(result, indent=2))
        else:
            run_cycle(include_media=False)

    elif args.command == "loop":
        run_continuous(interval_minutes=args.interval)

    elif args.command == "media":
        run_cycle(include_media=True)

    elif args.command == "video":
        client = get_client()
        generate_hero_video(client)

    elif args.command == "status":
        state = load_state()
        print(json.dumps(state, indent=2))