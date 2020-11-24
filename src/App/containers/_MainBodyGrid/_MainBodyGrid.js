import React, { useContext, useState, useEffect, useRef } from 'react';
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

  const renderCount = useRef(1);
  useEffect(() => {
    console.log(`MainBodyGrid rendered ${renderCount.current} time(s)`)
    renderCount.current = renderCount.current + 1
  })

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
          rootTimeline={ animate.rootTimeline }/>
        <MainContentRow
          className="mainContentRow"
          activeSection={ activeSection }
          animate={ animate.contentWindow } />
    </div>
  )
}
