import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import MasonryGrid from "../../components/MasonryGrid"
import "./style/gallery-masonry.css"

const GalleryPage = ({ data }) => {

  const items = data.allMdx.edges.map(({ node }) => {
    const image = node.frontmatter.hero_image.childImageSharp.gatsbyImageData
    return {
      id: node.id,
      slug: node.frontmatter.slug,
      title: node.frontmatter.title,
      image,
      // used to balance the columns, see MasonryGrid
      aspectRatio: image.height / image.width,
    }
  })

  return (
    <Layout>
      <Container className="gallery-container">
        {/* Masonry Gallery Grid */}
        <MasonryGrid
          items={items}
          renderItem={item => (
            <Link to={`/gallery/${item.slug}/`}>
              <GatsbyImage image={item.image} alt={item.title} />
            </Link>
          )}
        />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { slug: ASC } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: { fit: COVER }
                  webpOptions: { quality: 50 }
                )
              }
            }
          }
        }
      }
    }
  }
`

export default GalleryPage

export const Head = () => <Seo title="Gallery" />
