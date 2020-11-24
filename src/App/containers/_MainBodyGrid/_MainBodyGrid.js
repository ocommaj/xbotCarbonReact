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
    if (!activeSectionId) return
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
          wrapperTimeline={ animate.wrapperTimeline }/>
        <MainContentRow
          className="mainContentRow"
          activeSection={ activeSection }
          animate={ animate.contentWindow } />
    </div>
  )
}
