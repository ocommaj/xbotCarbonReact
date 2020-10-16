import React, { useState, useContext } from 'react';
import { AppContext } from '@App';
import HeaderTileRow from './_HeaderTileRow';
import MainContentRow from './_MainContentRow';
import FooterControlsRow from './_FooterControlsRow';

export default function MainBodyGrid() {
  const { animate, sections } = useContext(AppContext),
        [activeSectionId, setActiveSectionId] = useState(null),

        tileConfigs = Object.keys(sections).map(k => ({
          "sectionId": sections[k]["mainId"],
          "sectionTitle": sections[k]["displayTitle"]
        }) );

  return (
      <div className="mainBodyGrid">
      <div className="bx--grid bx--grid--full-width">
        <HeaderTileRow
          tileConfigs={tileConfigs}
          activeSectionId={activeSectionId}
          setActiveSectionId={setActiveSectionId}
          animate={animate.mainBody.header}
        />
        <MainContentRow
          sections={sections}
          activeSectionId={activeSectionId}
          animate={animate.mainBody.contentWindow}/>
        <FooterControlsRow />
      </div>
      </div>
  )
}
