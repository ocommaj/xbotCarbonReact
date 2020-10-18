import React from 'react'

export default function Resizer(props) {
  const { position, mouseDownHandler } = props,
        posKeys = {
          "top": "resizer-top",
          "left": "resizer-left",
          "right": "resizer-right",
          "bottom": "resizer-btm"
        }

  return (
    <div
      className={`resizer ${posKeys[position] }`}
      onMouseDown={ (e) => mouseDownHandler(e) }
    />
  )
}
