import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

type NavItem = {
    label: string
    path: string
}

const NAV_ITEMS: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "#contact" },
]

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

    // ALWAYS navigate first
    const goToContact = () => {
        navigate("/#contact")
    }

    return (
        <header
            role="banner"
            className="
        fixed top-0 inset-x-0 z-50
        backdrop-blur-md bg-slate-950/70
        border-b border-white/10
      "
        >
            <nav
                aria-label="Primary navigation"
                className="
          max-w-7xl mx-auto px-6 h-16
          flex items-center justify-between
        "
            >
                {/* Brand */}
                {/* Brand */}
                <button
                    onClick={goHome}
                    className="
    nav-item
    font-semibold tracking-tight text-white
    transition-colors duration-200
    hover:text-slate-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-500/60
  "
                >
                    Greg Homstad
                </button>


                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8 text-sm select-none">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.label}>
                            {item.label === "Home" ? (
                                <button
                                    onClick={goHome}
                                    className="
                    nav-item
                    relative
                    text-slate-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500/60
                    rounded-sm
                  "
                                >
                                    Home
                                </button>
                            ) : item.path.startsWith("#") ? (
                                <button
                                    onClick={goToContact}
                                    className="
                    nav-item
                    relative
                    text-slate-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500/60
                    rounded-sm
                  "
                                >
                                    Contact
                                </button>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
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
                                        ].join(" ")
                                    }
                                >
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
