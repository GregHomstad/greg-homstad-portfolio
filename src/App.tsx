import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./router/routes"
import Navigation from "./components/layout/Navigation"
import Footer from "./components/layout/Footer"
import ScrollProgress from "./components/effects/ScrollProgress"
import BackToTop from "./components/effects/BackToTop"

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
                <ScrollProgress />
                <div className="flex flex-col min-h-screen">
                    <Navigation />
                    <main className="flex-1">
                        <AppRoutes />
                    </main>
                    <Footer />
                </div>
                <BackToTop />
            </div>
        </BrowserRouter>
    )
}
