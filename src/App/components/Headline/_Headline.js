import React from 'react'

export default function Headline({props}) {
  const { text } = props
  
  return (
    <h1 className="headline">{text}</h1>
  )
}
