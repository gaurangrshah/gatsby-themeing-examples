# WIP

## 👷‍♂️🚧🏗

Currently have working theme based on the gatsby-default-starter

forked that to a seperate theme, to run:

~/package.json:

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


This theme will source files from any `src/pages` from either the theme or the site. Just create new pages. Theme pages are overwritten by site pages of the same name.
