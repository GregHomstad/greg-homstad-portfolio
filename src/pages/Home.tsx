import { useEffect } from "react"
import { useLocation } from "react-router-dom"

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

    return (
        <div>
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