import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// styles
import "./HeroSection.css"

function HeroSection() {
    return (
        // full-bleed hero. StaticImage gives the same blur-up load as the
        // gallery, instead of the strip-by-strip decode a css background does
        <div className="hero-container">
            <StaticImage
                src="../../images/laf-gallery/sunflower_hut_in_sicily.jpg"
                alt=""
                className="hero-image"
                layout="fullWidth"
                placeholder="blurred"
                loading="eager"
                objectFit="cover"
                objectPosition="center center"
            />
        </div>
    )
}

export default HeroSection
