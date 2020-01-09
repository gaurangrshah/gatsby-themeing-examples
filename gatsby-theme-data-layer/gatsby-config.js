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
        path: path.resolve(`./src/pages`),
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
