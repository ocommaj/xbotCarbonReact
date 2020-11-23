import React, { useState, useCallback, useEffect } from 'react'
import { templates } from '@components/ContentWindow'

export default function TabPanel({ props }) {
  const { animate, tab } = props,
        [panelContent, setPanelContent] = useState();

  const loadPanel = useCallback(() => {
    const templateId = tab.content.panelTemplateId,
          props = {
            ...tab,
            animate: animate[templateId] ? animate[templateId]() : null
          };

    setPanelContent( templates[templateId](props) )
  }, [animate, tab, setPanelContent])

  useEffect(() => loadPanel(), [loadPanel])

  return (
    <div className="tabPanel">
      { panelContent }
    </div>
  )
}
