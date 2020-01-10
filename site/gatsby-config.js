module.exports = {
  siteMetadata: {
    title: `Gatsby Themes Consumer`,
    description: `Testing consumption of multiple gatsby themes`,
    author: `@gs`,
  },
  plugins: [
    // `gatsby-theme-mdx-editor`,
    // `gatsby-theme-markdown-data`,
    // `gatsby-theme-json-data`
    `gatsby-theme-default-starter`,
    `gatsby-theme-boostrap-sass`,
    {
      resolve: `gatsby-theme-yaml-data`,
      options: {
        // allows ability to set options for the theme -- defined by the theme
        contentPath: 'data', // sets the value for our contentPath
        basePath: '/events' // sets the value for the events path
        // based on our theme settings, this will create the events folder if it does not exist,
        // -- as per our config.
      }
    },
    `gatsby-theme-styleguide`,
  ]
}
