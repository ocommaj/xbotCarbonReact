import React from 'react'

export default function PreviewPane(props) {
  const { article } = props,
        { previewHeadline } = article;

  console.log(article, previewHeadline)
  return (
    <div className="previewPane">
      <h1>{ previewHeadline }</h1>
    </div>
  )
}
