import React from 'react'
import Resizer from './_Resizer'

export default function ResizablePane(props) {
  const { id, content } = props
  return (
    <div id={ id } className="pane resizablePane">
      <div className="resizablePane--content">
        { content }
      </div>
      <Resizer position="bottom" paneId={ id } />
    </div>
  )
}
