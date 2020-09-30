import React from 'react'

export default function PreviewPane({ props }) {
  const { previewHeadline } = props

  return (
    <div className="previewPane">
      <h1>{ previewHeadline }</h1>
    </div>
  )
}
