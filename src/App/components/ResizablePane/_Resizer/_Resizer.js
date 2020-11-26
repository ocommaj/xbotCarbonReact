import React from 'react'

export default function Resizer(props) {
  const { position, paneId } = props,
        posKeys = {
          "top": "resizer-top",
          "left": "resizer-left",
          "right": "resizer-right",
          "bottom": "resizer-btm"
        }

  return (
    <div
      className={`resizer ${posKeys[position] }`}
      onMouseDown={ (e) => mouseDownHandler(e, paneId) }
    />
  )

  function mouseDownHandler(e, id) {
    //const x = e.clientX;
    const y = e.clientY,
          pane = document.getElementById(id),
          paneStyles = window.getComputedStyle(pane),
          //w = parseInt(paneStyles.width, 10),
          h = parseInt(paneStyles.height, 10);

    const mouseMoveHandler = (e) => {
            //const deltaX = e.clientX - x;
            const deltaY = e.clientY - y;

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
