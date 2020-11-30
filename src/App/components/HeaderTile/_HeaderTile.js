import React, { useCallback, useRef } from 'react';
import ChevronDown32 from '@carbon/icons-react/lib/chevron--down/32';
import { Tile } from 'carbon-components-react';
import TileLabel from './TileLabel';

export default function HeaderTile(props) {
  const {
    sectionId,
    displayTitle,
    clickHandler,
    colClass,
    timeline
  } = props;
  const timelineRef = useRef( timeline() );

  const onClick = useCallback((e) => {
    const { func, setActive } = clickHandler;
    const caller = e.currentTarget;
    timelineRef.current
      .add( func({ caller }).play() )
      .call( () => setActive(sectionId) );
  }, [clickHandler, sectionId]);

  let aspectRatio = window.matchMedia('(min-width: 376px)').matches === true
                      ? 'bx--aspect-ratio bx--aspect-ratio--1x1'
                      : null;

  return (
    <div className={`bx--col ${ colClass } headerTileWrapper`}>
      <span className={ aspectRatio } >
        <Tile
          id={ sectionId }
          className="headerTile"
          onClick={ (e) => onClick(e) }
          onMouseOver={ (e) => _highlightTile(e.currentTarget) }
          onMouseLeave={ (e) => _highlightTile(e.currentTarget, false) }>
          <TileLabel displayTitle={ displayTitle } icon={ <ChevronDown32/> }/>
        </Tile>
      </span>
    </div>
  );

  function _highlightTile(tile, makeHighlighted=true) {
    if (tile.classList.contains('activeSection')) return;
    tile.style.background = !!makeHighlighted ? '#0353e9' : '#0f62fe';
  };
};
