import React, { useContext, useState } from 'react';
import { AppContext } from '@App';
import HeaderTileRow from './_HeaderTileRow';
import MainContentRow from './_MainContentRow';

export default function MainBodyGrid() {
  const { animate, sections } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState(null);
  const tileConfigs = sections.map(section => ({
      mainId: section.mainId,
      displayTitle: section.displayTitle
    }) );

  return (
    <div className="mainBodyGrid">
        <HeaderTileRow
          className="headerTileRow"
          activeId={{
            current: activeSection ? activeSection.mainId : null,
            set: (id) => setActiveSection( __getById(id) )
          }}
          animate={{
            timeline: animate.wrapperTimeline,
            effects: animate.header
          }}
          tileConfigs={ tileConfigs } />
        <MainContentRow
          className="mainContentRow"
          activeSection={ activeSection }
          animate={ animate.contentWindow } />
    </div>
  );
  function __getById(id) { return sections.find(s => s.mainId === id) };
};
