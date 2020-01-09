# WIP

## 👷‍♂️🚧🏗

Currently have working markdown transformer theme

forked that to a seperate theme, to run:

~/package.json:

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-markdown-data",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-markdown-data": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-markdown-data`]
}
```

Run yarn to ensure the packages' relationships are set properly.
```shell
yarn
```

To consume the theme:
```shell
  yarn workspace site develop
```

Alternatively you could update the theme using:
```shell
  yarn workspace gatsby-theme-markdown-data develop
```

You will also need to create a file in your `site` directory:
`site/src/templates/mdTemplate.js`
```js
import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
```
