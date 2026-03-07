import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import CaseStudies from "../pages/CaseStudies"
import CaseStudyDetail from "../pages/CaseStudyDetail"
import Resources from "../pages/Resources"
import ResourceDetail from "../pages/ResourceDetail"
import Templates from "../pages/Templates"
import Resume from "../pages/Resume"
import AIWorkflow from "../pages/AIWorkflow"

export default function AppRoutes() {
    return (
        <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Resume */}
            <Route path="/resume" element={<Resume />} />

            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />

            {/* Templates MUST come before :slug */}
            <Route path="/resources/templates" element={<Templates />} />

            {/* Resource detail (articles, guides) */}
            <Route path="/resources/:slug" element={<ResourceDetail />} />

            {/* AI Workflow */}
            <Route path="/ai-workflow" element={<AIWorkflow />} />
        </Routes>
    )
}
