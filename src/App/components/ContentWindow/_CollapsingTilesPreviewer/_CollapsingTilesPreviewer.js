import React from 'react'
import { Tile } from 'carbon-components-react'
import PreviewPane from './PreviewPane'

export default function CollapsingTilesPreviewer() {
  return (
    <div className="collapsingTilesPreviewer">
      <div className="overflowWrapper">
      <div className="tilesColumn">
        <Tile>
          Preview tile 1
        </Tile>
        <Tile>
          Preview tile 2
        </Tile>
        <Tile>
          Preview tile 3
        </Tile>
        <Tile>
          Preview tile 4
        </Tile>
        <Tile>
          Preview tile 5
        </Tile>
        <Tile>
          Preview tile 6
        </Tile>
      </div>
      <div className="previewColumn">
        { PreviewPane() }
      </div>
      </div>
    </div>
  )
}
