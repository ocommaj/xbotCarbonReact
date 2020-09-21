import React from 'react'
import Headline from '@components/Headline'

export default function SinglePaneContent(props) {
  const { title } = props,
        content = () => Headline(title)

  return (
    <span className="paneContents">
      { content() }
    </span>
  )
}
