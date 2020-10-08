import React, { useState, useEffect } from 'react'
import templates from './_templates'

export default function ContentWindow({ props }) {
  const { activeSection, animate } = props,
        [content, setContent] = useState(
          loadFromTemplate(activeSection.windowType));

  useEffect(() => {
    setContent( loadFromTemplate(activeSection.windowType) )}, [activeSection])

  function loadFromTemplate(templateId) {
    const props = {
      animate,
      'mainId': activeSection.mainId,
      'title': activeSection.defaultStr,
      'tabs': activeSection.options.tabs,
    }

    return templates[templateId](props)
  }

  return (
    <div className="bx--col bx--offset-lg-1 mainContentCol">
      <div className="mainContentWindow">
        { content }
      </div>
    </div>
  )
}
