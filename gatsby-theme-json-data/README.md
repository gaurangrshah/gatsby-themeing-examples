🚨🚧🏗

# WIP -- Under Development

> NOTE: project requires a data folder in the `src/` directory, with markdown files, or will throw an error -- this directory is defined in `gatsby-theme-json-data/gatsby-config.js

> TODO: configure gatsby-node to createPage for each page if needed.

## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-json-data",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-json-data": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-json-data`]
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
  yarn workspace gatsby-theme-json-data develop
```
