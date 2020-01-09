import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  h1: props => (
    <h1 style={{ color: 'green' }} {...props} />
  ),
  pre: props => console.log(props) || <pre {...props} />,
  wrapper: ({ children }) => <>{children}</> // deliberately not passing in page context props
}
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}
