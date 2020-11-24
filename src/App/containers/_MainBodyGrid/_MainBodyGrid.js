import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@App';
import HeaderTileRow from './_HeaderTileRow';
import MainContentRow from './_MainContentRow';

export default function MainBodyGrid() {
  const { animate, sections } = useContext(AppContext),
        [activeSectionId, setActiveSectionId] = useState(null),
        [activeSection, setActiveSection] = useState(null);

  const tileConfigs = Object.keys(sections).map(k => ({
          "sectionId": sections[k]["mainId"],
          "sectionTitle": sections[k]["displayTitle"]
        }) );

  useEffect(() => {
    setActiveSection(sections[activeSectionId])
  }, [sections, activeSectionId])

  return (
    <div className="mainBodyGrid">
        <HeaderTileRow
          className="headerTileRow"
          tileConfigs={ tileConfigs }
          activeSectionId={ activeSectionId }
          setActiveSectionId={ setActiveSectionId }
          animate={ animate.header }
          rootTimeline={ animate.rootTimeline }/>
        <MainContentRow
          className="mainContentRow"
          activeSection={ activeSection }
          sections={ sections }
          activeSectionId={ activeSectionId }
          animate={ animate.contentWindow } />
    </div>
  )
}
