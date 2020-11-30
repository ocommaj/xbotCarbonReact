import React, { useCallback, useRef } from 'react';
import ChevronDown32 from '@carbon/icons-react/lib/chevron--down/32';
import { Tile } from 'carbon-components-react';
import TileLabel from './TileLabel';

const DOM = {
  ACTIVE_CLASS: "activeSection",
  TILE_CLASS: "headerTile",
  WRAPPER: "headerTileWrapper",
  SQ_ASPECT: "bx--aspect-ratio bx--aspect-ratio--1x1",
};

export default function HeaderTile(props) {
  const {
    clickHandler,
    colClass,
    timeline,
    sectionConfig: { mainId, displayTitle }
  } = props;
  const timelineRef = useRef( timeline() );

  const onClick = useCallback((e) => {
    if (e.currentTarget.classList.contains(DOM.ACTIVE_CLASS)) return;
    const { func, row, setActive } = clickHandler;
    const caller = e.currentTarget;
    timelineRef.current
      .add( func({ caller, row, DOM }).play() )
      .call( () => setActive(mainId) );
  }, [clickHandler, mainId]);

  let aspectRatio = window.matchMedia('(min-width: 376px)').matches
                      ? DOM.SQ_ASPECT : null;

  return (
    <div className={`${ colClass } ${ DOM.WRAPPER }`}>
      <span className={ aspectRatio } >
        <Tile
          id={ mainId }
          className={ DOM.TILE_CLASS }
          onClick={ (e) => onClick(e) }
          onMouseOver={ (e) => _highlightTile(e.currentTarget) }
          onMouseLeave={ (e) => _highlightTile(e.currentTarget, false) }>
          <TileLabel title={ displayTitle } icon={ <ChevronDown32 /> } />
        </Tile>
      </span>
    </div>
  );

  function _highlightTile(tile, makeHighlighted=true) {
    if (tile.classList.contains(DOM.ACTIVE_CLASS)) return;
    tile.style.background = !!makeHighlighted ? '#0353e9' : '#0f62fe';
  };
};
