import React from 'react'

export default function MapboxBG(props) {
  const { imageURL } = props

  return (
    <div
      className="mapboxBG"
      style={{'backgroundImage': `url(${imageURL})`}}
    />
  )
}
