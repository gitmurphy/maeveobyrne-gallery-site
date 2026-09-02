import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
// styles
import "./LYLSGallery.css"
// components + data
import MasonryGrid from "../MasonryGrid"
import { LET_YOUR_LIGHT_SHINE } from "../../data/collections"

function LYLSGallery() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "lyls-gallery" } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const byFile = {}
  data.allFile.nodes.forEach(node => {
    if (node.childImageSharp) {
      byFile[node.base] = node.childImageSharp.gatsbyImageData
    }
  })

  const items = LET_YOUR_LIGHT_SHINE.map(painting => {
    const image = byFile[painting.file]
    return {
      id: painting.file,
      title: painting.title,
      image,
      // column balancing, see MasonryGrid
      aspectRatio: image ? image.height / image.width : 1,
    }
  }).filter(item => item.image)

  return (
    <div className="lyls-container">
      <Container>
        <h1 className="collection-heading">
          The Let Your Light Shine Collection
        </h1>

        <MasonryGrid
          items={items}
          renderItem={item => (
            <>
              <GatsbyImage image={item.image} alt={item.title} />
              <div className="plate-caption">
                <h3 className="plate-title">{item.title}</h3>
              </div>
            </>
          )}
        />
      </Container>
    </div>
  )
}

export default LYLSGallery
