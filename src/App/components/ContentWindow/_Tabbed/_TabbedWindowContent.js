import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import TabPanel from './TabPanel';

export default function TabbedWindowContent({ props }) {
  const {
    animate,
    timeline,
    activeSection: { mainId, options: { tabs } }
  } = props;

    return (
      <div className="tabbedWindowContent" key={`${mainId}_tabWindow`}>
        <Tabs
          className="tabBar"
          key={ `${mainId}_tabs` }>
          { tabs.map((tab, i) => {
            return (
              <Tab
                key={`tab_${tab.id}`}
                tabIndex={i}
                id={`tab_${tab.id}`}
                label={tab.title}>
                <TabPanel props={ { animate, timeline, tab } } />
              </Tab>
              )
            })}
        </Tabs>
      </div>
    );
  };
