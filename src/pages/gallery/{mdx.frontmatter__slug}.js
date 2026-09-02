import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col, Table } from "react-bootstrap"

const PaintingPage = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)
  let media = data.mdx.frontmatter.media
  if (media == null) {
    media = "Acrylic"
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col></Col>
          <Col lg={6} md={8}>
            <br />
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
            <Table>
                                <tbody>
                                    <tr>
                                        <td>Title</td>
                                        <td>{data.mdx.frontmatter.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Dimensions</td>
                                        <td>{data.mdx.frontmatter.dimensions}</td>
                                    </tr>
                                    <tr>
                                        <td>Media</td>
                                        <td>{media}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{data.mdx.frontmatter.sale_status}</td>
                                    </tr>
                                </tbody>
            </Table>
            <br />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  )
}

// The File System Route API passes the matched node's id in page context.
// gatsby-plugin-mdx v5 dropped the `slug` field, so the route is driven by
// `frontmatter.slug` instead and the query matches on id.
export const query = graphql`
  query PaintingQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        slug
        dimensions
        media
        sale_status
        hero_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export default PaintingPage

export const Head = () => <Seo title="Painting" />
