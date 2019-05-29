module.exports = {
  siteMetadata: {
    title: `Node.js PAD`,
    description: `Node.js PAD is a simple and elegant function to pad strings in both left and right directions.`,
    author: `@adaltas`,
    siteUrl: `https://pad-project.js.org`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-toc-patched",
            options: {
              header: "Table of Contents", // the custom header text
              include: [
                "**/*.md", // an include glob to match against
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "±",
              aliases: {},
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: "24", // <600: 48; >600:64
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
  ],
}
