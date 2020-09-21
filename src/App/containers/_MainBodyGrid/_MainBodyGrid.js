import React, { useState, useContext } from 'react';
import { AppContext } from '@App';
import HeaderTileRow from './_HeaderTileRow';
import MainContentRow from './_MainContentRow';
import FooterControlsRow from './_FooterControlsRow';

export const MainBodyContext = React.createContext()

export default function MainBodyGrid() {
  const { animate, sections } = useContext(AppContext),
        [activeSectionId, setActiveSectionId] = useState("/"),

        tileConfigs = Object.keys(sections).map(k => ({
          "sectionId": sections[k]["mainId"],
          "sectionTitle": sections[k]["displayTitle"]
        }) ),

        contextValue = {
          tileConfigs,
          activeSectionId,
          setActiveSectionId,
          animate: animate.mainBody };

  return (
    <MainBodyContext.Provider value={ contextValue }>
      <div className="bx--grid bx--grid--full-width mainBodyGrid">
        <HeaderTileRow />
        <MainContentRow />
        <FooterControlsRow />
      </div>
    </MainBodyContext.Provider>
  )
}
