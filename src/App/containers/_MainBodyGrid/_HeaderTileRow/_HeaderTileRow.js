import React from 'react';
import HeaderTile from '@components/HeaderTile';

export default function HeaderTileRow(props) {
  const {
    tileConfigs,
    activeSectionId,
    setActiveSectionId,
    animate } = props;

  const constructClickHandler = () => {
    const args = {activeId: activeSectionId, setActiveId: setActiveSectionId},
          func = !activeSectionId ? animate.reduceTiles : animate.switchTiles;

    return {args, func}
  }

  return (
    <div className="bx--row headerTileRow">
      { tileConfigs.map((config, i) => {
          let colClass = i === 0 ? "bx--offset-lg-1" : null
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
