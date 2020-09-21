import React from 'react'
import DropdownFilter from '@components/DropdownFilter'

export default function TabPanel(tab) {
  const {
    title,
    content
  } = tab,
  filters = !!content.filters ? _loadFilters() : []

  function _loadFilters() {
    return content.filters.map( filter => DropdownFilter(filter) )
  }

  return (
    <>
      <div className="panelHeader">
        <h2>{content.defaultStr}</h2>
        <span className="headerDropdowns">{ filters }</span>
      </div>
    </>
  )
}
