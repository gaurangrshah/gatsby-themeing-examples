const path = require('path')

module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.md`, `.mdx`],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.resolve(`./src/data`),
        name: `data`,
      },
    },
    `gatsby-transformer-json`
  ]
}
