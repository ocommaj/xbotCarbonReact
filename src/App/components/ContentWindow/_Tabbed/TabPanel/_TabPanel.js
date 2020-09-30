import React, { useState, useEffect } from 'react'
import { templates } from '@components/ContentWindow'

export default function TabPanel({ tab }) {
  const { content } = tab,
        templateId = content.panelTemplateId,
        [panelContent, setPanelContent] = useState( loadPanel(templateId) );

  useEffect(() => { setPanelContent(loadPanel(templateId) )}, [tab])

  function loadPanel(templateId) { return templates[templateId]({...tab}) }

  return (
    <div className="tabPanel">
      { panelContent }
    </div>
  )
}
