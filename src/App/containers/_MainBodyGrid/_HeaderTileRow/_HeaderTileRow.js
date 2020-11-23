import React, { useCallback } from 'react';
import HeaderTile from '@components/HeaderTile';

export default function HeaderTileRow(props) {
  const {
    animate,
    tileConfigs,
    activeSectionId: activeId,
    setActiveSectionId: setActiveId
   } = props;

  const clickHandler = useCallback(() => ({
    args: { activeId, setActiveId },
    func: !activeId ? animate.reduceTiles : animate.switchTiles
  }), [activeId, setActiveId, animate])

  return (
    <div className="bx--row headerTileRow">
      { tileConfigs.map((config, i) => {
          let colClass = "bx--col-sm-4 bx--col-md-2 bx--col-lg-4";
          colClass = i === 0 ? `${colClass} bx--offset-lg-1` : colClass;

          return (
            <HeaderTile
              key={ `headerTile_${ config.sectionId }`}
              sectionId={ config.sectionId }
              displayTitle={ config.sectionTitle }
              clickHandler={ clickHandler() }
              colClass={ colClass }
            />
          )
        }) }
    </div>
  )
}
