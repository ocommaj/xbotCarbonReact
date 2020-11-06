import React from 'react';
import HeaderTile from '@components/HeaderTile';

export default function HeaderTileRow(props) {
  const {
    tileConfigs,
    activeSectionId,
    setActiveSectionId,
    animate } = props;

  const constructClickHandler = () => ({
    args: { activeId: activeSectionId, setActiveId: setActiveSectionId },
    func: !activeSectionId ? animate.reduceTiles : animate.switchTiles
  })

  return (
    <div className="bx--row headerTileRow">
      { tileConfigs.map((config, i) => {
          let colClass = "bx--col-sm-4 bx--col-md-2 bx--col-lg-4";
          colClass = i === 0 ? colClass + " bx--offset-lg-1" : colClass;

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
