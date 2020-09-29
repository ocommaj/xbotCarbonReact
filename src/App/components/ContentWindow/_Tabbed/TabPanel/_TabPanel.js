import React from 'react'
import DropdownFilter from '@components/DropdownFilter'
import CollapsingTilesPreviewer from '../../_CollapsingTilesPreviewer'

export default function TabPanel(tab) {
  const { title, content } = tab,
        filterConfigs = content.filters,
        templateId = content.panelTemplateId;

  function loadFilters(filters) {
    return filters.map(f => {
      return <DropdownFilter key={`${f.id}_filter`} props={f}/> })
  }

  function loadPanel(templateId) {
     return templateId === "CollapsingTilesPreviewer" ?
        <CollapsingTilesPreviewer />  :  null
      }

  if (templateId) { content.defaultStr = null }

  return (
    <div className="tabPanel">
      <div className="panelHeader">
        <h2>{content.defaultStr}</h2>
        <span className="headerDropdowns">
          { filterConfigs && loadFilters(filterConfigs) }
        </span>
      </div>
      { templateId && loadPanel(templateId) }
    </div>
  )
}
