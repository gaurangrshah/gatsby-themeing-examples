import React from "react"
import YamlLayout from "../components/YamlLayout"
import EventList from "../components/EventList"

import { graphql, useStaticQuery } from "gatsby"
const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate
          endDate
          location
          url
          slug
        }
      }
    }
  `)
  const events = data.allEvent.nodes

  return (
    <YamlLayout>
      <EventList events={events} />
    </YamlLayout>
  )
}
export default EventsTemplate
