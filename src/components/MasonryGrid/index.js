import React, { useState, useEffect, useMemo } from "react"
// styles
import "./MasonryGrid.css"

// column count by min-width, widest first
const BREAKPOINTS = [
  { minWidth: 1200, columns: 4 },
  { minWidth: 900, columns: 3 },
  { minWidth: 576, columns: 2 },
  { minWidth: 0, columns: 1 },
]

// what the server renders, before the viewport is known
const DEFAULT_COLUMNS = 4

const columnsForWidth = width =>
  BREAKPOINTS.find(breakpoint => width >= breakpoint.minWidth).columns

// Each item goes into whichever column is currently shortest, so the columns
// finish at roughly the same height instead of wherever a round-robin happens
// to leave them. Every column is the same width, so an item's aspect ratio
// stands in for its rendered height.
//
// Tallest is placed first. Packing in document order leaves whatever happens to
// come last to unbalance the columns, which makes the trailing gap depend on
// the order the CMS hands us. Assigning tallest-first removes that dependency.
// Column heights are decided by the assignment alone, so once that is done each
// column is sorted back into document order for a natural reading order.
// An item marked `leading` heads a column of its own, in document order, before
// anything else is placed. That keeps the paintings Maeve wrote about at the top
// of the grid rather than at whatever depth the packing would otherwise give
// them. The balancing then works around those seeded heights, so a very tall
// leading item simply receives less afterwards.
const packIntoColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => [])
  const heights = new Array(columnCount).fill(0)

  const entries = items.map((item, index) => ({
    item,
    index,
    leading: Boolean(item.leading),
  }))

  const place = (entry, column) => {
    columns[column].push(entry)
    heights[column] += entry.item.aspectRatio || 1
  }

  entries
    .filter(entry => entry.leading)
    .forEach((entry, i) => place(entry, i % columnCount))

  entries
    .filter(entry => !entry.leading)
    .sort((a, b) => (b.item.aspectRatio || 1) - (a.item.aspectRatio || 1))
    .forEach(entry => {
      let shortest = 0
      for (let i = 1; i < columnCount; i++) {
        if (heights[i] < heights[shortest]) {
          shortest = i
        }
      }
      place(entry, shortest)
    })

  return columns.map(column =>
    column
      .sort((a, b) => {
        if (a.leading !== b.leading) return a.leading ? -1 : 1
        return a.index - b.index
      })
      .map(entry => entry.item)
  )
}

const MasonryGrid = ({ items, renderItem }) => {
  const [columnCount, setColumnCount] = useState(DEFAULT_COLUMNS)

  useEffect(() => {
    const update = () => setColumnCount(columnsForWidth(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const columns = useMemo(
    () => packIntoColumns(items, columnCount),
    [items, columnCount]
  )

  return (
    <div className="masonry-grid">
      {columns.map((column, index) => (
        <div className="masonry-grid-column" key={index}>
          {column.map(item => (
            <div className="masonry-grid-item" key={item.id}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default MasonryGrid
