import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';

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
            <div><h1>{tab.title} content</h1></div>
          </Tab>
        )
      })}
    </Tabs>
  )
}
