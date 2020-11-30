import React from 'react'

export default function TileLabel(props) {
  const {
    title,
    icon
  } = props;

  return (
    <div className="tileLabel bannerMode">
      <h1 className="title large">{title}</h1>
      <span className="iconWrapper">
        {icon}
      </span>
    </div>
  )
}
