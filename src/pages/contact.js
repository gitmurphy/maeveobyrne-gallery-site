import * as React from "react"
import ContactSection from "../components/ContactSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <ContactSection />
  </Layout>
)

export default Contact

export const Head = () => <Seo title="Contact" />
