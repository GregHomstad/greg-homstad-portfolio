import { Helmet } from "react-helmet-async"
import Hero from "../components/sections/Hero"
import WhatIDo from "../components/sections/WhatIDo"
import FeaturedCaseStudies from "../components/sections/FeaturedCaseStudies"
import HowIThink from "../components/sections/HowIThink"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Home() {
    const title = "Greg Homstad | Technical Business Analyst"
    const desc = "Enterprise systems delivery — SAP, ERP, financial platforms. Requirements analysis, functional specs, and cross-system validation."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content={SITE_OG_IMAGE} />
            </Helmet>

            <Hero />
            <WhatIDo />
            <FeaturedCaseStudies />
            <HowIThink />
            <About />
            <Contact />
        </>
    )
}