import React, { useState } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function TilesPreviewer({ props }) {
  const { animate, data, content } = props,
        [previewArticle, setPreviewArticle] = useState(null),
        [tiles] = useState( loadTiles(data || placeholderData) );

  return (
    <div className="tilesPreviewer">
      <div className="overflowWrapper">
        <div className="tilesColumn">
          { tiles }
        </div>
        <div className="previewColumn">
          { previewArticle && <PreviewPane props={previewArticle} /> }
        </div>
      </div>
    </div>
  )

  function loadTiles(fromList) {
    return fromList.map((article, idx) => {
            const key = `articleTile_${article.id}`,
                  props = {
                    key,
                    headline: article.tileHeadline,
                    clickHandler: () => constClickHandler(key, article)
                  };
            return ArticleTile(props)
          })
      }

  function constClickHandler(key, article) {
      const previewCol = document.querySelector('.previewColumn'),
            args = {
              caller: key,
              setPreviewArticle: () => setPreviewArticle(article)
            },

            func = !!previewCol.classList.contains('previewArticleSelected') ?
                       animate.switchTiles : animate.collapseTiles ;

      return func(args)

    }

}
