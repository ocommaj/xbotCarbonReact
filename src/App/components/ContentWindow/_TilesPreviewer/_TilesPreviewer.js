import React, {useState } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function TilesPreviewer({props}) {
  const { title } = props,
        [tiles] = useState( loadTiles(placeholderData) ),
        [previewArticle, setPreviewArticle] = useState(null);

  return (
    <div className="tilesPreviewer">
      <div className="overflowWrapper">
        <div className="tilesColumn">
          { tiles }
        </div>
        <div className="previewColumn">
          {previewArticle && <PreviewPane props={previewArticle} />}
        </div>
      </div>
    </div>
  )

  function previewClickedArticle(article) { setPreviewArticle(article) }

  function loadTiles(fromList) {
    return fromList.map((entry, idx) => {
            const props = {
                    key: `articleTile_${idx}`,
                    headline: entry.tileHeadline,
                    clickHandler: () => previewClickedArticle(entry)
                  };
            return ArticleTile(props)
          })
      }

}
