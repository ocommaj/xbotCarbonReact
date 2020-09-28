import React from 'react'
import { ClickableTile } from 'carbon-components-react'

export default function ArticleTile(props) {
  const { key, headline } = props;

  return (
    <ClickableTile key={key}>
      <h2>{ headline }</h2>
    </ClickableTile>
  )
}
