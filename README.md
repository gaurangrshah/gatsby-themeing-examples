# WIP

## 👷‍♂️🚧🏗

## Setup

```json
{
  "private": true,
  "workspaces": [
    "gatsby-theme-[theme-name]",
    "site"
  ]
}

```

~/site/package.json:
```json
  "dependencies": {
    "gatsby-theme-[theme-name]": "*",
  }
```

~/site/gatsby-config.js

```js
module.exports = {
  plugins: [`gatsby-theme-[theme-name]`]
}
```

Run yarn to ensure the packages' relationships are set properly.
```shell
yarn
```

To consume the theme run develop on site after configuration is updated:
```shell
  yarn workspace site develop
```

Alternatively you could edit the theme itself using:
```shell
  yarn workspace gatsby-theme-[theme-name] develop
```
