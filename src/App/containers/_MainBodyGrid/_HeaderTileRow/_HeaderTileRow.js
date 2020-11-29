import React, { useRef, useCallback, useEffect } from 'react';
import HeaderTile from '@components/HeaderTile';

export default function HeaderTileRow(props) {
  const {
    className,
    activeId,
    animate,
    tileConfigs,
   } = props;

  const headerTileRow = useRef(null);
  const timelineRef = useRef( animate.timeline() );
  const tileFaderAnim = animate.effects.labelFader( headerTileRow.current );

  const clickHandler = useCallback(() => ({
      args: { activeId: activeId.current, setActive: activeId.set },
      func: !activeId.current
        ? animate.effects.reduceTiles
        : animate.effects.switchTiles
  }), [activeId, animate]);

  useEffect(() => {
    if (!tileFaderAnim) return
    if (activeId.current) return
    timelineRef.current.add( tileFaderAnim.play() );
  });

  useEffect(() => {
    if (!activeId.current) return
      timelineRef.current.progress(1);
      timelineRef.current.clear();
  });

  if (!tileConfigs) return null
  return (
    <div className={ `bx--row ${ className }` } ref={ headerTileRow }>
      { tileConfigs.map((config, i) => {
          let colClass = "bx--col-sm-4 bx--col-md-2 bx--col-lg-4";
          colClass = i === 0 ? `${colClass} bx--offset-lg-1` : colClass;

          return (
            <HeaderTile
              key={ `headerTile_${ config.mainId }`}
              sectionId={ config.mainId }
              displayTitle={ config.displayTitle }
              clickHandler={ clickHandler() }
              colClass={ colClass }
            />
          )
        }) }
    </div>
  );
}
