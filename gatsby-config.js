module.exports = {
  siteMetadata: {
    title: `Maeve O'Byrne`,
    description: `A website for fine arts painter Maeve O'Byrne to showcase her artworks and to 
    gain business enquiries.`,
    author: `Peter Murphy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    //extract styled-components css at build time so the nav is styled in the
    //server-rendered html, before any js runs (fixes the unstyled menu flash)
    `gatsby-plugin-styled-components`,
    //optime images for screen-size/ lazy-loading/ blur-on-load
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Maeve O'Byrne`,
        short_name: `MOB Art`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/images/paint-brush.png`, // Favicon
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-mdx`,
    // //parse markdown files to graphql readable
    // `gatsby-transformer-remark`,
    // //parse images in markdown files to graphql readable
    // `gatsby-remark-images`,
  ],
}