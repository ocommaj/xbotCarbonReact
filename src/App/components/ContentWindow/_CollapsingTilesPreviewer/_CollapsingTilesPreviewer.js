import React, { useState } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function CollapsingTilesPreviewer() {
  const tiles = loadTiles(placeholderData)

  function loadTiles(fromList) {
    return fromList.map((entry, idx) => {
            const props = {
                    key: `articleTile_${idx}`,
                    headline: entry.tileHeadline
                  };
            return ArticleTile(props)
          })
      }

  return (
    <div className="collapsingTilesPreviewer">
      <div className="overflowWrapper">
        <div className="tilesColumn">
          { tiles }
        </div>
        <div className="previewColumn">
          { PreviewPane() }
        </div>
      </div>
    </div>
  )
}
