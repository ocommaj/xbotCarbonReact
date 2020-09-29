import React from 'react'
import TabbedWindow from './_Tabbed'
import SinglePane from './_SinglePane'

export default function ContentWindow(props) {
  const { activeSection } = props,
        defaultStr = activeSection.defaultStr,
        config = activeSection.options;

  function loadContent(type) {
    return type === 'tabbed' ?
      <TabbedWindow tabs={config.tabs} /> :
      <SinglePane title={activeSection.defaultStr} />
  }

  return (
    <div className="bx--col bx--offset-lg-1 mainContentCol">
      <div className="mainContentWindow">
        { activeSection && loadContent(config.type) }
      </div>
    </div>
  )
}
