export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            role="contentinfo"
            className="border-t border-white/10 bg-slate-950/80 backdrop-blur-sm"
        >
            <div
                className="
                    max-w-7xl mx-auto
                    px-6 py-10
                    flex flex-col md:flex-row
                    items-center justify-between
                    gap-6
                    text-sm
                    text-slate-400
                "
            >
                {/* Brand */}
                <div className="text-center md:text-left">
                    <div className="font-semibold text-slate-200">
                        Greg Homstad
                    </div>
                    <div className="mt-1 text-slate-400">
                        IT Product Owner - Enterprise Systems
                    </div>
                </div>

                {/* Links / Meta */}
                <nav
                    aria-label="Footer navigation"
                    className="flex items-center gap-6"
                >
                    <a
                        href="https://linkedin.com/in/GregHomstad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            font-medium
                            text-slate-300
                            transition-colors
                            hover:text-white
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-blue-500/60
                            rounded
                        "
                    >
                        LinkedIn
                    </a>

                    <span className="text-slate-600">
                        &copy; {currentYear} Greg Homstad
                    </span>
                </nav>
            </div>
        </footer>
    )
}
