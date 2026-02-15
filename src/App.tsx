import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./router/routes"
import Navigation from "./components/layout/Navigation"
import Footer from "./components/layout/Footer"
import ParticleBackground from "./components/layout/ParticleBackground"

export default function App() {
    return (
        <BrowserRouter>
            {/* Root wrapper establishes stacking context */}
            <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">

                {/* Background particles */}
                <ParticleBackground />

                {/* Foreground app shell */}
                <div className="relative z-10 flex flex-col min-h-screen">
                    <Navigation />

                    <main className="flex-1">
                        <AppRoutes />
                    </main>

                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
