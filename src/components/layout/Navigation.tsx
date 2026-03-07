import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
    { to: "/", label: "Home" },
    { to: "/case-studies", label: "Work" },
    { to: "/resources", label: "Resources" },
    { to: "/resume", label: "Resume" },
]

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] transition-all duration-500 ${scrolled ? "bg-[#111111]/95 backdrop-blur-sm" : "bg-[rgba(12,12,12,0.85)]"
                }`}
        >
            <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-4 md:px-6 md:py-5">
                <NavLink
                    to="/"
                    className="text-display text-[1.1rem] text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                    Greg Homstad
                </NavLink>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-9">
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/"}
                            className={({ isActive }) =>
                                `relative text-[0.78rem] tracking-[0.08em] uppercase pb-1 border-b transition-colors duration-300 ${isActive
                                    ? "text-[var(--accent)] border-[var(--accent)]"
                                    : "text-[var(--muted)] border-transparent hover:text-[var(--text)] hover:border-[var(--border-hover)]"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[var(--muted)]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-[var(--bg)] border-t border-[var(--border)] px-6 py-6">
                    <div className="flex flex-col gap-4">
                        {links.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === "/"}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `text-[0.85rem] tracking-[0.06em] uppercase transition-colors ${isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
