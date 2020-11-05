import React, { useState, useEffect } from 'react'
import { templates } from '@components/ContentWindow'

export default function TabPanel({ props }) {
  const { animate, tab } = props,
        content = tab.content,
        templateId = content.panelTemplateId,
        [panelContent, setPanelContent] = useState(
          loadFromTemplate(templateId) );

  useEffect(() => {
    setPanelContent( loadFromTemplate(templateId) )
  }, [tab, templateId])

  function loadFromTemplate(templateId) {
    const props = {
      ...tab,
      animate: animate[templateId] ? animate[templateId]() : null
    }
    return templates[templateId](props)
  }

  return (
    <div className="tabPanel">
      { panelContent }
    </div>
  )
}
