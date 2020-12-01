import React, { useContext, useState } from 'react';
import { AppContext } from '@App';
import HeaderTileRow from './_HeaderTileRow';
import MainContentRow from './_MainContentRow';

const DOM = {
  MAIN_GRID: "mainBodyGrid",
  HEADER_ROW: "headerTileRow",
  MAIN_ROW: "mainContentRow",
};

export default function MainBodyGrid() {
  const { animate, sections } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState(null);
  const tileConfigs = sections.map( ({ mainId, displayTitle }) =>
          ({ mainId, displayTitle }) );

  return (
    <div className={ DOM.MAIN_GRID }>
        <HeaderTileRow
          className={ DOM.HEADER_ROW }
          activeId={ {
            current: activeSection ? activeSection.mainId : null,
            set: (id) => setActiveSection( __getById(id) )
          } }
          animate={ {
            timeline: animate.wrapperTimeline,
            effects: animate.header
          } }
          tileConfigs={ tileConfigs } />
        <MainContentRow
          className={ DOM.MAIN_ROW }
          activeSection={ activeSection }
          animate={ animate.contentWindow }/>
    </div>
  );
  function __getById(id) { return sections.find(s => s.mainId === id) };
};
