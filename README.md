# WIP

## 👷‍♂️🚧🏗

## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-mdx-editor",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-mdx-editor": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-mdx-editor`]
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
  yarn workspace gatsby-theme-mdx-editor develop
```
