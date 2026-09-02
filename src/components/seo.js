/**
 * Head content for every page.
 *
 * Rendered through Gatsby's Head API rather than react-helmet:
 *
 *   export const Head = () => <Seo title="Gallery" />
 *
 * Gatsby 5 has this built in, which is why react-helmet and
 * gatsby-plugin-react-helmet are no longer dependencies.
 */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const fullTitle = defaultTitle ? `${title} / ${defaultTitle}` : title

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
