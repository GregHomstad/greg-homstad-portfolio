import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingScreen from "../components/effects/LoadingScreen"

const Home = lazy(() => import("../pages/Home"))
const CaseStudies = lazy(() => import("../pages/CaseStudies"))
const CaseStudyDetail = lazy(() => import("../pages/CaseStudyDetail"))
const Resume = lazy(() => import("../pages/Resume"))
const NotFound = lazy(() => import("../pages/NotFound"))

export default function AppRoutes() {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Resume */}
                <Route path="/resume" element={<Resume />} />

                {/* Case Studies */}
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}