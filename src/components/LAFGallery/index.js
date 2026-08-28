import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Collapse, Button } from "react-bootstrap"
// styles
import "./LAFGallery.css"
// components + data
import MasonryGrid from "../MasonryGrid"
import {
  LOST_AND_FOUND_FEATURED,
  LOST_AND_FOUND,
} from "../../data/collections"

const Plate = ({ item }) => {
  const [open, setOpen] = useState(false)
  const detailsId = `${item.id.replace(/[^a-z0-9]+/gi, "-")}-details`

  return (
    <>
      <GatsbyImage image={item.image} alt={item.title} />
      <div className="plate-caption">
        <h3 className="plate-title">{item.title}</h3>
        <p className="plate-detail">{item.detail}</p>

        {item.description && (
          <>
            <Button
              variant="link"
              className="read-more"
              onClick={() => setOpen(!open)}
              aria-controls={detailsId}
              aria-expanded={open}
            >
              {open ? "Read less" : "Read more"}
            </Button>
            <Collapse in={open}>
              <div id={detailsId}>
                <p className="plate-description">{item.description}</p>
              </div>
            </Collapse>
          </>
        )}
      </div>
    </>
  )
}

function LAFGallery() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "laf-gallery" } }) {
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

  // the three Maeve wrote about lead the grid, the rest follow
  const paintings = [
    ...LOST_AND_FOUND_FEATURED.map(p => ({ ...p, leading: true })),
    ...LOST_AND_FOUND,
  ]

  const items = paintings
    .map(painting => {
      const image = byFile[painting.file]
      return {
        id: painting.file,
        title: painting.title,
        detail: painting.detail,
        description: painting.description,
        leading: painting.leading,
        image,
        // column balancing, see MasonryGrid
        aspectRatio: image ? image.height / image.width : 1,
      }
    })
    .filter(item => item.image)

  return (
    <div className="lafg-container">
      <Container>
        <h1 className="collection-heading">The Lost and Found Collection</h1>
        <MasonryGrid items={items} renderItem={item => <Plate item={item} />} />
      </Container>
    </div>
  )
}

export default LAFGallery
