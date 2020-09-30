import React, { useState, useEffect } from 'react'
import DropdownFilter from '@components/DropdownFilter'
import { templates } from '@components/ContentWindow'

export default function TabPanel({tab}) {
  const { title, content } = tab,
        filterConfigs = content.filters,
        templateId = content.panelTemplateId,
        [panelContent, setPanelContent] = useState( loadPanel(templateId) );

  useEffect(() => { setPanelContent(loadPanel(templateId) )}, [tab])

  function loadFilters(filters) {
    return filters.map(f => {
      return <DropdownFilter key={`${f.id}_filter`} props={f}/> }) }

  function loadPanel(templateId) { return templates[templateId]({...tab}) }

  return (
    <div className="tabPanel">
      <div className="panelHeader">
        <span className="headerDropdowns">
          { filterConfigs && loadFilters(filterConfigs) }
        </span>
      </div>
      { panelContent }
    </div>
  )
}
