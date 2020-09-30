import React, { useState, useEffect } from 'react'
import templates from './_templates'

export default function ContentWindow(props) {
  const { activeSection } = props,
        [content, setContent] = useState(loadWindow(activeSection.windowType));

  useEffect(() => {
    setContent( loadWindow(activeSection.windowType) )}, [activeSection])

  function loadWindow(type) {
    const props = {
      'mainId': activeSection.mainId,
      'title': activeSection.defaultStr,
      'tabs': activeSection.options.tabs,
    }

    return templates[type](props)
  }

  return (
    <div className="bx--col bx--offset-lg-1 mainContentCol">
      <div className="mainContentWindow">
        { content }
      </div>
    </div>
  )
}
