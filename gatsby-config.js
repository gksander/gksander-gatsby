module.exports = {
  siteMetadata: {
    title: `Grant Sander`,
    titleTemplate: "%s * Grant Sander",
    description: `Grant Sander's homepage`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // Helmet for page meta
    `gatsby-plugin-react-helmet`,

    // Sourcing filesystem and shit
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-typescript`,

    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,

    // Web fonts
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Sansita Swashed:300,400", "Montserrat:400,700"],
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
