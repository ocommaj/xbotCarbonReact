import React from 'react'
import Resizer from './_Resizer'

export default function ResizablePane(props) {
  const { id, content } = props
  return (
    <div id={ id } className="pane resizablePane">
      <div className="resizablePane--content">
        { content }
      </div>
      <Resizer position="bottom" mouseDownHandler={ mouseDownHandler } />
    </div>
  )

  function mouseDownHandler(e) {
    const x = e.clientX,
          y = e.clientY,
          pane = document.getElementById(id),
          paneStyles = window.getComputedStyle(pane),
          w = parseInt(paneStyles.width, 10),
          h = parseInt(paneStyles.height, 10);

    const mouseMoveHandler = (e) => {
            const deltaX = e.clientX - x,
                  deltaY = e.clientY - y;

            pane.style.flexBasis = `${h + deltaY}px`
          },

          mouseUpHandler = () => {
            document.body.removeEventListener('mousemove', mouseMoveHandler);
            document.body.removeEventListener('mouseup', mouseUpHandler);
          };

    document.body.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseup', mouseUpHandler);
  }

}
