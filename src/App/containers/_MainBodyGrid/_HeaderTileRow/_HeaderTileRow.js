import React, { useContext } from 'react';
import HeaderTile from '@components/HeaderTile';
import { MainBodyContext } from '@containers/_MainBodyGrid';

export default function HeaderTileRow() {
  const {
    tileConfigs,
    activeSectionId,
    setActiveSectionId,
    animate } = useContext(MainBodyContext),
    anim = animate.header;

  const constructClickHandler = () => {
    const args = {activeId: activeSectionId, setActiveId: setActiveSectionId},
          func = activeSectionId === "/" ? anim.reduceTiles : anim.switchTiles;

    return {args, func}
  }

  return (
    <div className="bx--row headerTileRow">
      { tileConfigs.map((config, i) => {
          let colClass = i === 0 ? "bx--offset-lg-1" : ""
          return (
            <HeaderTile
              key={ `headerTile_${ config.sectionId }`}
              sectionId={ config.sectionId }
              displayTitle={ config.sectionTitle }
              clickHandler={ constructClickHandler() }
              colClass={ colClass }
            />
          )
        }) }
    </div>
  )
}
