module.exports = {
  siteMetadata: {
    title: `Ideal Credit`,
    description: `Credite Rapide în Moldova`,
    author: `idealcredit.md`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-80593294-1",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ideal-credit`,
        short_name: `ideal-credit`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#FF9A00`,
        display: `minimal-ui`,
        icon: `src/static/ideal-credit-logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
