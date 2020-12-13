import React from 'react'
import Resizer from './_Resizer'

export default function ResizablePane(props) {
  const { id, children } = props
  return (
    <div id={ id } className="pane resizablePane">
      <div className="resizablePane--content">
        { children }
      </div>
      <Resizer position="bottom" paneId={ id } />
    </div>
  )
}
/*{ children }*/
