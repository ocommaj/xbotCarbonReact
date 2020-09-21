import React from 'react';
import ChevronDown32 from '@carbon/icons-react/lib/chevron--down/32';
import { Tile } from 'carbon-components-react';
import TileLabel from './TileLabel';

export default function HeaderTile(props) {
  const {
    sectionId,
    displayTitle,
    clickHandler,
    colClass,
  } = props

  return (
    <span className={`bx--col ${colClass} headerTile`}>
      <span className="bx--aspect-ratio bx--aspect-ratio--1x1">
        <Tile
          id={sectionId}
          className="headerTile"
          onClick={ (e) => {
              const {args, func} = clickHandler
              args.caller = e.currentTarget
              func(args)
            } }>
          <TileLabel displayTitle={displayTitle} icon={<ChevronDown32 />} />
        </Tile>
      </span>
    </span>
  )
}
