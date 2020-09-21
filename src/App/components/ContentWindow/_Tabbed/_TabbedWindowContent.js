import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import TabPanel from './TabPanel'

export default function TabbedWindowContent(props) {
  const { tabs } = props

  return (
    <Tabs className="tabBar" >
      { tabs.map((tab, i) => {
        return (
          <Tab
            key={`tab_${tab.id}`}
            tabIndex={i}
            id={`tab_${tab.id}`}
            href={tab.id}
            label={tab.title}>
            { TabPanel(tab) }
          </Tab>
        )
      })}
    </Tabs>
  )
}
