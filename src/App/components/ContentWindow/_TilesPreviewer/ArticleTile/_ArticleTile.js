import React from 'react'
import { ClickableTile } from 'carbon-components-react'

export default function ArticleTile(props) {
  const { key, headline, clickHandler } = props;

  const handleClick = () => {
    console.log(key)
  }

  return (
    <ClickableTile key={key} handleClick={ clickHandler }>
      <h2>{ headline }</h2>
    </ClickableTile>
  )
}
