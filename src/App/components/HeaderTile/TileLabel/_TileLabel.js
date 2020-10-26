import React from 'react'

export default function TileLabel(props) {
  const {
    displayTitle,
    icon
  } = props
  return (
    <div className="tileLabel">
      <h1 className="title large">{displayTitle}</h1>
      <span className="iconWrapper">
        {icon}
      </span>
    </div>
  )
}
