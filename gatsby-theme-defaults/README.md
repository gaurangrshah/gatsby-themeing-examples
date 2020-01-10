🚨🚧🏗

# WIP -- Under Development

-- to install run:

```shell
  yarn workspace <consuming-site-name> add "gatsby-theme-styleguide@*"
```

This theme configures the following packages and plugins for consumption by a site: 

```shell
gatsby-plugin-theme-ui theme-ui @emotion/core @emotion/styled @mdx-js/react
```

> **INFO:**
>
> `gatsby-plugin-theme-ui` takes a global theme context object and makes it available to all themes using `gatsby-plugin-theme-ui`, it exposes an object that we can configure using the[ `system-ui` theme specification]( https://system-ui.com/):
>
> We configure this object by adding a `theme.js` :

 `gatsby-theme-styleguide/theme.js`:

```js
export const theme = {
  /* set theme and defaults here... */
}
```

> **NOTE:** we've defined default styling for the following components that `theme-ui` exposes for us:
>
> Layout 	||	Header	||	Main	||	Container
>
> Along with default html elments:
>
> h1 	|| 	ul	||	li



## Component Shadowing

Allows us to override a default theme from `gatsby-theme-ui` to do this we create a directory that houses our shadowed components, the directory must be named: `src/gatsby-plugin-theme-ui`  



---

`gatsby-theme-styleguide/src/gatsby-plugin-theme-ui/index.js`

```js
import { theme } from "../theme"

export default theme;
```



Using Theme-UI Styled Elements:

`gatsby-theme-events/src/components/event-list.js`:

```react
Copygatsby-theme-events/src/components/event-list.js: copy code to clipboard
import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
const EventList = ({ events }) => {
  return (
    <>
      <Styled.h1>Upcoming Events</Styled.h1>
      <Styled.ul>
        {events.map(event => (
          <Styled.li key={event.id}>
            <strong>
              <Link to={event.slug}>{event.name}</Link>
            </strong>
            <br />
            {new Date(event.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            in {event.location}
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  )
}
export default EventList
```



Overriding Theme from Consuming site:

`site/src/gatsby-theme-styleguide/gatsby-plugin-theme-ui/index.js`

```react
import merge from "lodash.merge"
import { theme } from "@jlengstorf/gatsby-theme-events"
export default merge({}, theme, {
  colors: {
    primary: "blue",
  },
})
```

