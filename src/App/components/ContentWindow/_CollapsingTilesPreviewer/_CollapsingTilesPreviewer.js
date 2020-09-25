import React from 'react'
import { Tile } from 'carbon-components-react'

export default function CollapsingTilesPreviewer() {
  return (
    <div className="collapsingTilesPreviewer">
      <div className="tilesColumn">
      <Tile>
        Preview tile
      </Tile>
      </div>
      <div classname="previewColumn">
      </div>
    </div>
  )
}
