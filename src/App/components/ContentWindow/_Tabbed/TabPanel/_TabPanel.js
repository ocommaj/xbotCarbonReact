import React, { useState, useEffect } from 'react'
import { templates } from '@components/ContentWindow'

export default function TabPanel({ props: { animate, tab } }) {
  const [panelContent, setPanelContent] = useState();

  useEffect(() => {
    const templateId = tab.content.panelTemplateId;
    const template = templates[templateId];
    setPanelContent( template({
            activeSection: { ...tab },
            animate: animate[templateId] ? animate[templateId]() : null
          })
        );
  }, [animate, tab, setPanelContent])

  return (
    <div className="tabPanel">
      { panelContent }
    </div>
  )
}
