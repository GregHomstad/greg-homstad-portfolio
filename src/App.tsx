import { BrowserRouter } from "react-router-dom"
import { Component, type ReactNode } from "react"
import AppRoutes from "./router/routes"
import Navigation from "./components/layout/Navigation"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/effects/ScrollProgress"
import BackToTop from "./components/effects/BackToTop"
import LoadingScreen from "./components/effects/LoadingScreen"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6">
                    <div className="text-center">
                        <h1 className="text-display text-[2rem] mb-4">Something went wrong</h1>
                        <p className="text-[var(--muted)] mb-8">An unexpected error occurred.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="btn-primary"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <LoadingScreen />
                <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
                    <ScrollProgress />
                    <div className="flex flex-col min-h-screen">
                        <Navigation />
                        <main id="main-content" className="flex-1">
                            <AppRoutes />
                        </main>
                        <Footer />
                    </div>
                    <BackToTop />
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    )
}
