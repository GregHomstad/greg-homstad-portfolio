import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

import Hero from "../components/sections/Hero"
import WhatIDo from "../components/sections/WhatIDo"
import EnterpriseStack from "../components/sections/EnterpriseStack"
import FeaturedCaseStudies from "../components/sections/FeaturedCaseStudies"
import HowIThink from "../components/sections/HowIThink"
import Impact from "../components/sections/Impact"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"

export default function Home() {
    const location = useLocation()

    useEffect(() => {
        if (location.hash === "#contact") {
            const el = document.getElementById("contact")
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [location.hash])

    const title = "Greg Homstad | Technical Product Owner"
    const description = "Technical Product Owner with 5+ years in SAP, enterprise financial systems, and ERP platforms. Based in Northwest Arkansas."

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={SITE_OG_IMAGE} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={SITE_TWITTER_HANDLE} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={SITE_OG_IMAGE} />
            </Helmet>
            <Hero />
            <WhatIDo />
            <EnterpriseStack />
            <FeaturedCaseStudies />
            <HowIThink />
            <Impact />
            <About />
            <Contact />
        </div>
    )
}