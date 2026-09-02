# Software Requirements

Feature/System:    Maeve O'Byrne's Gallery Website - v2
Status:            draft
Owner:             Peter Murphy
Updated:           2026-08-28
Version:           v0.2

## How to Use

This document covers only what has been explicitly raised so far.
Sections marked "pending" are deliberately empty rather than guessed at, and are to be filled after a /grill-me session.

## 1. Summary

maeveobyrne.com is a Gatsby static site built in 2022 that shows painter Maeve O'Byrne's work and collects enquiries.
It is functional and its content is right, but it looks dated - flat blocks of colour with rounded corners and box shadows, a boring typeface throughout, heavy hand-applied watermarks, and a footer with logos stuck onto it.
It is also slow to settle on the home page, and the gallery grid leaves an odd empty space at the bottom.
v2 rebuilds the presentation layer against the same content.

## 2. Goals

  G1.  The site reads as an artist's site rather than a generic template - texture, typography, and pattern drawn from Maeve's own work.
  G2.  The home page loads and settles quickly.
  G3.  Maeve's work stays protected against reuse without the watermark taking over the painting.

## 3. Non-Goals

  N1.  Not changing any of Maeve's images or text content - both are good and carry over as they are.
  N2.  Not rebuilding what already works - the site is functional and shows her work.
  N3.  Further non-goals pending.

## 4. Requirements

### Keep

  REQ-1.   The full-bleed hero image on the home page shall be retained.
  REQ-2.   The navigation header shall remain fixed at the top of the viewport.
  REQ-3.   The expandable "read more" sections shall be retained, with a more subtle affordance than the current outlined button.
  REQ-4.   All existing artwork images and text content shall carry over unchanged.

### Loading

  REQ-5.   The navigation menu shall not be displayed until its styles have loaded; it shall never appear as a vertical list of default-blue links. [Fixed on v1 by registering gatsby-plugin-styled-components in gatsby-config.js - carry the fix into v2.]
  REQ-6.   The home page shall load faster than it does today.
  REQ-7.   Home page artwork images shall use the blurred lazy-loading treatment that already works on the gallery page.

### Look and feel

  REQ-8.   The site shall carry a small amount of texture in place of the current flat blocks of colour with rounded corners and box shadows.
  REQ-9.   Typography shall be more artistic than the current face while staying clean and modern.
  REQ-10.  A hand-painted display face shall be derived from the painted signatures on Maeve's own paintings, and used somewhere prominent.
  REQ-11.  The email and phone number bar at the top of the page shall be restyled.

### Footer

  REQ-12.  The footer shall be filled with a repeating pattern inspired by one of Maeve's paintings.
  REQ-13.  The boundary between the body and the footer shall follow the contour of that pattern rather than a straight line.
  REQ-14.  The Visual Artists Ireland and Artlinks logos shall be integrated into the footer rather than looking stuck on.

### Watermarks

  REQ-15.  Artwork shall continue to carry a visible watermark.
  REQ-16.  The watermark shall be less dominant than the current one.
  REQ-17.  The watermark shall use a better typeface than the current one.
  REQ-18.  Watermarks shall be applied programmatically rather than by hand in GIMP.

### Gallery

  REQ-19.  The pinterest-style tile layout shall be retained.
  REQ-20.  The gallery grid shall not leave a large empty space at the end; trailing images shall fill the short columns.

## 5. Constraints & Assumptions

  C1.   Watermarking is a client requirement, not a preference - Maeve's work was previously stolen and reproduced on cushions, bags, and t-shirts.
  C2.   v2 is built as a separate deploy on its own URL for Maeve to test and approve before it replaces v1.
  C3.   Hosting stays on Netlify, rebuilt automatically when remote main updates.

  A1.   Netlify build logs and browser dev-console metrics can be pulled on request to diagnose loading problems.
  A2.   Maeve approves the visual direction before it is built out.

## 6. Acceptance Criteria

  AC-1   (REQ-1):   Given the v2 home page, when it loads, then the hero image is present and full-bleed.
  AC-2   (REQ-2):   Given any page, when it is scrolled, then the header stays fixed at the top.
  AC-3   (REQ-3):   Given a "read more" control, when it is activated, then the section expands, and the control is not a default outlined Bootstrap button.
  AC-4   (REQ-4):   Given v2, when its images and copy are diffed against v1, then they are identical.
  AC-5   (REQ-5):   Given a cold load with an empty cache and JavaScript disabled, when the page paints, then the nav is a styled horizontal bar.
  AC-6   (REQ-6):   Given the same throttling profile on v1 and v2, when the home page is loaded cold on each, then v2 is measurably faster. [Metric and target pending - see Q1.]
  AC-7   (REQ-7):   Given the home page on a slow connection, when an artwork scrolls into view, then a blurred placeholder shows first and resolves to the full image, as on the gallery page.
  AC-8   (REQ-8):   Given any content surface, when it is inspected, then it carries texture and does not rely on flat fill plus rounded corners plus box shadow alone.
  AC-9   (REQ-9, REQ-10):  Given the v2 design, when Maeve reviews it, then she approves the typeface pairing and the derived hand-painted face.
  AC-10  (REQ-11):  Given the top of any page, when the contact bar renders, then it is visually deliberate rather than a plain strip of text.
  AC-11  (REQ-12):  Given viewport widths from phone to large desktop, when the footer renders, then the pattern tiles with no visible seam.
  AC-12  (REQ-13):  Given any of those widths, when the footer's top edge is inspected, then it is a contour that follows the pattern, not a straight line.
  AC-13  (REQ-14):  Given the footer, when the two logos are inspected, then neither reads as a pasted-on image box.
  AC-14  (REQ-15, REQ-16, REQ-17):  Given ten artworks sampled across the gallery, when they are compared against v1, then each carries a watermark, in the new typeface, less dominant than v1's.
  AC-15  (REQ-18):  Given the watermark settings are changed and the site rebuilt, when the output images are inspected, then every artwork reflects the change with no manual image editing.
  AC-16  (REQ-19, REQ-20):  Given the gallery page at a desktop width, when the bottom of the grid is inspected, then the tile layout is intact and no column ends conspicuously short of the others.

## 7. Open Questions

  Q1.   How is "faster" measured, and what is the target? Nothing is instrumented today.
  Q2.   How subtle should the "read more" affordance become - restyled button, text link, or a disclosure arrow?
  Q3.   How much texture is wanted? "A small amount" needs a reference before it is built.
  Q4.   How much less dominant should the watermark be, and does Maeve accept that given the previous theft?
  Q5.   Are there better watermarking approaches now than a drawn-on mark, and is one of them wanted here?
  Q6.   Are clean, unwatermarked masters available? Programmatic watermarking (REQ-18) needs them.
  Q7.   Do Maeve's painted signatures cover enough letterforms to build a usable face, and if not, will she paint the missing ones?
  Q8.   Where does the hand-painted face get used - wordmark only, all headings, or the watermark too?
  Q9.   Which painting is the footer pattern taken from, and who picks it?
  Q10.  Remaining questions pending /grill-me.
