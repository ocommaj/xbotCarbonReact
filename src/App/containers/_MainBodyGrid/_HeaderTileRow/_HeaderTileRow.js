import React, { useRef, useCallback, useEffect } from 'react';
import HeaderTile from '@components/HeaderTile';

const DOM = {
  ROW: "bx--row",
  COLUMN: "bx--col bx--col-sm-4 bx--col-md-2 bx--col-lg-4",
  OFFSET: "bx--offset-lg-1",
 };

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
      setActive: activeId.set,
      row: headerTileRow.current,
      func: !activeId.current
        ? animate.effects.reduceTiles
        : animate.effects.switchTiles
  }), [activeId, animate]);

  useEffect(() => {
    if (!tileFaderAnim) return;
    if (activeId.current) return;
    timelineRef.current.add( tileFaderAnim.play() );
  });

  useEffect(() => {
    if (!activeId.current) return;
      timelineRef.current.progress(1);
      timelineRef.current.clear();
  });

  if (!tileConfigs) return null;
  return (
    <div className={ `${DOM.ROW} ${ className }` } ref={ headerTileRow }>
      { tileConfigs.map((config, i) => {
          const col = i === 0 ? `${DOM.COLUMN} ${DOM.OFFSET}` : DOM.COLUMN;
          return (
            <HeaderTile
              key={ `headerTile_${ config.mainId }` }
              timeline={ animate.timeline }
              sectionConfig={ config }
              clickHandler={ clickHandler() }
              colClass={ col }
            />
          );
        }) }
    </div>
  );
};
