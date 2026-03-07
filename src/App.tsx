import { BrowserRouter } from "react-router-dom"
import { Component } from "react"
import type { ReactNode } from "react"
import AppRoutes from "./router/routes"
import Navigation from "./components/layout/Navigation"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/effects/ScrollProgress"
import BackToTop from "./components/effects/BackToTop"
import LoadingScreen from "./components/effects/LoadingScreen"

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false }
    static getDerivedStateFromError() { return { hasError: true } }
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6">
                    <div className="text-center max-w-md">
                        <h1 className="text-display text-[clamp(2rem,5vw,3rem)] mb-4">Something went wrong</h1>
                        <p className="text-[var(--muted)] text-[0.95rem] mb-8">An unexpected error occurred.</p>
                        <a href="/" className="btn-primary px-8 py-3">Back to Home</a>
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
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--bg)] focus:rounded focus:text-sm focus:font-medium">
                Skip to main content
            </a>
            <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
                <ScrollProgress />
                <div className="flex flex-col min-h-screen">
                    <Navigation />
                    <main id="main-content" className="flex-1">
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
