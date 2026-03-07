import { Helmet } from "react-helmet-async"
import Hero from "../components/sections/Hero"
import WhatIDo from "../components/sections/WhatIDo"
import FeaturedCaseStudies from "../components/sections/FeaturedCaseStudies"
import About from "../components/sections/About"
import Contact from "../components/sections/Contact"
import { SITE_URL, SITE_OG_IMAGE, SITE_TWITTER_HANDLE } from "../seo"

export default function Home() {
    const title = "Greg Homstad | Technical Product Owner | SAP & Enterprise Systems"
    const desc = "Technical Product Owner specializing in SAP, ERP, and enterprise data platforms. Requirements analysis, functional specs, cross-system validation, and data reconciliation."

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="canonical" href={SITE_URL} />
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
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Greg Homstad",
                    "jobTitle": "Technical Product Owner",
                    "url": SITE_URL || "https://greghomstad.com",
                    "sameAs": ["https://linkedin.com/in/GregHomstad"],
                    "alumniOf": {
                        "@type": "CollegeOrUniversity",
                        "name": "University of Arkansas"
                    },
                    "knowsAbout": ["SAP S/4HANA", "Enterprise Systems", "Product Ownership", "Data Reconciliation", "ERP", "Power BI", "BigQuery", "Requirements Engineering"]
                })}</script>
            </Helmet>

            <Hero />
            <WhatIDo />
            <FeaturedCaseStudies />
            <About />
            <Contact />
        </>
    )
}