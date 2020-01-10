import React from "react"
import { graphql } from "gatsby"
import YamlLayout from "../components/YamlLayout"
import Event from "../components/Event"

// queries data for individual events

// using a PageQuery here -- which gives us access to
// -- the id field we passed into context as a query argument/variable
export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`

const EventTemplate = ({ data: { event } }) => (
  <YamlLayout>
    <Event {...event} />
  </YamlLayout>
)

export default EventTemplate
