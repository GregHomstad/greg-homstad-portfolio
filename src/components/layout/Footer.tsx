import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border)] px-6 py-8">
            <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[0.72rem] text-[var(--faint)] tracking-[0.06em] uppercase">
                    © {new Date().getFullYear()} Greg Homstad
                </span>
                <div className="flex items-center gap-6">
                    <Link to="/case-studies" className="text-[0.72rem] text-[var(--faint)] tracking-[0.06em] uppercase hover:text-[var(--accent)] transition-colors">
                        Work
                    </Link>
                    <Link to="/resume" className="text-[0.72rem] text-[var(--faint)] tracking-[0.06em] uppercase hover:text-[var(--accent)] transition-colors">
                        Resume
                    </Link>
                    <a href="https://linkedin.com/in/GregHomstad" target="_blank" rel="noopener noreferrer"
                        className="text-[0.72rem] text-[var(--faint)] tracking-[0.06em] uppercase hover:text-[var(--accent)] transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    )
}
