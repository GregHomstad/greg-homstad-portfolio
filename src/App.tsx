import { BrowserRouter } from "react-router-dom"
import { Component } from "react"
import type { ReactNode, ErrorInfo } from "react"
import AppRoutes from "./router/routes"
import Navigation from "./components/layout/Navigation"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/effects/ScrollProgress"
import BackToTop from "./components/effects/BackToTop"
import LoadingScreen from "./components/effects/LoadingScreen"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false }
    static getDerivedStateFromError() { return { hasError: true } }
    componentDidCatch(error: Error, info: ErrorInfo) { console.error("App error:", error, info) }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6">
                    <div className="text-center">
                        <h1 className="text-display text-[clamp(2rem,5vw,3.5rem)] mb-4">Something went wrong</h1>
                        <p className="text-[var(--muted)] mb-8">Please try refreshing the page.</p>
                        <button onClick={() => window.location.reload()} className="btn-primary px-8 py-3">
                            Refresh
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
            <LoadingScreen />
            <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
                <ScrollProgress />
                <div className="flex flex-col min-h-screen">
                    <Navigation />
                    <main className="flex-1">
                        <ErrorBoundary>
                            <AppRoutes />
                        </ErrorBoundary>
                    </main>
                    <Footer />
                </div>
                <BackToTop />
            </div>
        </BrowserRouter>
    )
}
