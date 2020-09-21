import React from 'react'

export default function WrappedPictogram(props) {
  const {
    pictogram,
    style,
    onClick
  } = props

  return (
    <span className="pictogramWrapper" style={style} onClick={onClick}>
      {pictogram}
    </span>
  )
}
