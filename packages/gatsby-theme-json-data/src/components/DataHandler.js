import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

export default function ({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query DataQuery {
          allDataJson {
            edges {
              node {
                content {
                  home {
                    heroSection {
                      heading
                      tagline
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ul>{JSON.stringify(data)}</ul>
      )}
    >
      {children}
    </StaticQuery>
  )
}

function getData(data) {
  console.log(data)
}
