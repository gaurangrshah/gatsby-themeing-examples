🚨🚧🏗
# WIP -- Under Development

-- to install run:

```shell
  yarn workspace <consuming-site-name> add "gatsby-theme-bootstrap-sass"
```

Theme exposes default styles, to add boostrap and introduce scss to consumer:

create a styles directory in the consuming site:

`~/site/src/styles.scss`

```scss
  @import '~bootstrap/scss/bootstrap';

  body {
    background: $primary;
  }
```
**NOTE:** boostrap must be imported into site as above.

- Then import into project:
`~/src/pages/index.js`
```js
import "../styles/styles.scss"
```

-- Now test:

`~/src/pages/index.js`
```js
  import React from 'react'
  import "../styles/styles.scss"

  export default function about() {
    return (
      <div className="text-center">
        Test
      </div>
    )
  }
```
