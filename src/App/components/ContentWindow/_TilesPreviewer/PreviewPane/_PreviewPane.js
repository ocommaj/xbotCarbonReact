import React from 'react'

const PreviewPane = React.forwardRef(({props}, ref) => {
  const { previewHeadline } = props;

  return (
    <div className="previewPane" ref={ ref }>
      <h1>{ previewHeadline }</h1>
    </div>
  )
})

export default PreviewPane
