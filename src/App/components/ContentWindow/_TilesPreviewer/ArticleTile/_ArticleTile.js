import React from 'react'
import { ClickableTile } from 'carbon-components-react'

export default function ArticleTile(props) {
  const {
    key,
    headline,
    clickHandler,
  } = props;

  return (
    <ClickableTile
      key={key}
      id={key}
      className="articlePreviewTile"
      handleClick={  () => clickHandler() }>
      <h2>{ headline }</h2>
    </ClickableTile>
  )

}
