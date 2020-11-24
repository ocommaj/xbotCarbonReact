import React, { useCallback, useRef, useEffect } from 'react';
import HeaderTile from '@components/HeaderTile';

export default function HeaderTileRow(props) {
  const {
    animate,
    tileConfigs,
    rootTimeline,
    activeSectionId: activeId,
    setActiveSectionId: setActiveId
   } = props;
  const headerTileRow = useRef(null);
  const tileFaderAnim = animate.labelFader( headerTileRow.current );

  const clickHandler = useCallback(() => {
    return {
      args: { activeId, setActiveId },
      func: !activeId ? animate.reduceTiles : animate.switchTiles
    }
  }, [activeId, setActiveId, animate]);

  useEffect(() => {
    if (!tileFaderAnim) return
    rootTimeline.add( tileFaderAnim.play() );
  });

  useEffect(() => {
    if (activeId) {
      rootTimeline.progress(1);
      rootTimeline.clear();
    }
  }, [rootTimeline, activeId]);

  return (
    <div className="bx--row headerTileRow" ref={ headerTileRow }>
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
  );
}
