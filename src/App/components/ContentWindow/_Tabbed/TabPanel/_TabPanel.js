import React, { useState, useCallback, useEffect } from 'react'
import { templates } from '@components/ContentWindow'

export default function TabPanel({ props: { animate, tab } }) {
  const [panelContent, setPanelContent] = useState();

  const loadPanel = useCallback(() => {
    const templateId = tab.content.panelTemplateId;
    const template = templates[templateId];
    setPanelContent( template({
            activeSection: { ...tab },
            animate: animate[templateId] ? animate[templateId]() : null
          })
        );
  }, [animate, tab, setPanelContent])

  useEffect(() => loadPanel(), [loadPanel])

  return (
    <div className="tabPanel">
      { panelContent }
    </div>
  )
}
