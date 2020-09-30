import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import TabPanel from './TabPanel'

export default function TabbedWindowContent({props}) {
  const { mainId, tabs } = props,
        [content, setContent] = useState(null);

  return (
    <div className="tabbedWindowContent">
    <Tabs className="tabBar" key={`${mainId}_tabs`}>
      { tabs.map((tab, i) => {
        return (
          <Tab
            key={`tab_${tab.id}`}
            tabIndex={i}
            id={`tab_${tab.id}`}
            href={tab.id}
            label={tab.title}>
            <TabPanel tab={tab} />
          </Tab>
        )
      })}
    </Tabs>
    </div>
  )
}
