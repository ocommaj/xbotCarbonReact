import React from 'react'
import Headline from '@components/Headline'

export default function SinglePaneContent({props}) {
  const { title, content } = {...props}

  return (
    <div>
      { content ? renderHeadline(content.defaultStr) : renderHeadline(title) }
    </div>
  )

  function renderHeadline(text) {
    return <Headline props={ {text} } />
  }
}
