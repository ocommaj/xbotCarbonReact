import React, { useState } from 'react'
import TabbedWindow from './_Tabbed'
import SinglePane from './_SinglePane'

export default function ContentWindow(props) {
  const { anim, activeSection } = props,
        config = activeSection.options,
        contentComponent = config.type === 'tabbed' ?
                  () => TabbedWindow({tabs: config.tabs}) :
                  () => SinglePane({title: activeSection.defaultStr});

  return (
    <div className="bx--col bx--offset-lg-1 mainContentCol">
      <div className="mainContentWindow">
        { contentComponent() }
      </div>
    </div>
  )
}
