import React from 'react'
import DropdownFilter from '@components/DropdownFilter'
import CollapsingTilesPreviewer from '../../_CollapsingTilesPreviewer'

export default function TabPanel(tab) {
  const { title, content, panelTemplateId } = tab,
        filters = !!content.filters ? loadFilters(content.filters) : [];

  function loadFilters(filters) { return filters.map(f => DropdownFilter(f) ) }

  let panelBody = content.panelTemplateId === "CollapsingTilesPreviewer" ?
        CollapsingTilesPreviewer() : <></>
  console.log(content.panelTemplateId)

  return (
    <div className="tabPanel">
      <div className="panelHeader">
        <h2>{content.defaultStr}</h2>
        <span className="headerDropdowns">{ filters }</span>
      </div>
      { panelBody }
    </div>
  )
}
