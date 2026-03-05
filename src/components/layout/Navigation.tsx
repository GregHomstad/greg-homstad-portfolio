import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

type NavItem =
    | { label: string; to: string; onClick?: never }
    | { label: string; to?: never; onClick: () => void }

export default function Navigation() {
    const location = useLocation()
    const navigate = useNavigate()

    // Scroll to top on real route changes only
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
    }, [location.pathname])

    const goHome = () => {
        if (location.pathname !== "/") {
            navigate("/")
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const goToContact = () => {
        navigate("/#contact")
    }

    const NAV_ITEMS: NavItem[] = [
        { label: "Home", onClick: goHome },
        { label: "Case Studies", to: "/case-studies" },
        { label: "Resources", to: "/resources" },
        { label: "Contact", onClick: goToContact },
    ]

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        [
            "nav-item",
            "relative",
            "text-slate-300",
            "transition-colors duration-200",
            "hover:text-white",
            "focus-visible:outline-none",
            "focus-visible:ring-2",
            "focus-visible:ring-blue-500/60",
            "rounded-sm",
            isActive ? "text-white" : "",
        ]
            .filter(Boolean)
            .join(" ")

    return (
        <header
            role="banner"
            className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/10"
        >
            <nav
                aria-label="Primary navigation"
                className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
            >
                {/* Brand */}
                <button
                    onClick={goHome}
                    className="nav-item font-semibold tracking-tight text-white transition-colors duration-200 hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                >
                    Greg Homstad
                </button>

                {/* Desktop Navigation */}
                <ul className="flex items-center gap-8 text-sm select-none">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            {item.onClick ? (
                                <button
                                    onClick={item.onClick}
                                    className="nav-item relative text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-sm"
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <NavLink to={item.to} className={navLinkClass}>
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
