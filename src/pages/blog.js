import * as React from "react"
import BlogSection from "../components/BlogSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <BlogSection />
  </Layout>
)

export default BlogPage

export const Head = () => <Seo title="Blog" />
