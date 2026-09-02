import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/AboutSection"

const About = () => (
  <Layout>
    <AboutSection />
  </Layout>
)

export default About

export const Head = () => <Seo title="About" />
