module.exports = {
  plugins: [
    // `gatsby-theme-mdx-editor`,
    `gatsby-theme-default-starter`,
    // `gatsby-theme-markdown-data`,
    // `gatsby-theme-mdx-editor`,
    // `gatsby-theme-json-data`
    `gatsby-theme-boostrap-sass`,
    {
      resolve: `gatsby-theme-yaml-data`,
      options: {
        // allows ability to set options for the theme -- defined by the theme
        contentPath: '/', // sets the value for our contentPath
        basePath: '/events' // sets the value for the events path
        // based on our theme settings, this will create the events folder if it does not exist,
        // -- as per our config.
      }
    }
  ]
}
