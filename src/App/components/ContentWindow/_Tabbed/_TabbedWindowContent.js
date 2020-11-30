import React, { useState } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import TabPanel from './TabPanel';
import DropdownFilter from '@components/DropdownFilter';

export default function TabbedWindowContent({ props }) {
  const { animate, activeSection: { mainId, options: { tabs } } } = props;
  const [filters, setFilters] = useState( loadFilters(tabs[0]) );

  return (
    <div className="tabbedWindowContent" key={`${mainId}_tabWindow`}>
      <span className="headerDropdowns">{ filters }</span>
      <Tabs
        className="tabBar"
        key={ `${mainId}_tabs` }
        onSelectionChange={ (i) => setFilters( loadFilters(tabs[i]) ) }>
        { tabs.map((tab, i) => {
          return (
            <Tab
              key={`tab_${tab.id}`}
              tabIndex={i}
              id={`tab_${tab.id}`}
              label={tab.title}>
              <TabPanel props={ { animate, tab } } />
            </Tab>) })}
      </Tabs>
    </div>
  );

  function loadFilters(tab) {
    return !!tab.content.filters ?
              tab.content.filters.map(f => {
                return <DropdownFilter key={`${f.id}_filter`} props={f}/> })
            : null
    };
  };
