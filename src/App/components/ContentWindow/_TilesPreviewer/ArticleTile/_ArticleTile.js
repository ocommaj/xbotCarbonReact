import React from 'react'
import { Tile } from 'carbon-components-react'

export default function ArticleTile(props) {
  const {
    key,
    headline,
    clickHandler,
  } = props;

  return (
    <Tile
      key={key}
      id={key}
      className="articlePreviewTile"
      onClick={ (e) => {
        if (!e.currentTarget.classList.contains('activeArticleTile')) {
          clickHandler() } } }>
      <h2>{ headline }</h2>
    </Tile>
  )

}
