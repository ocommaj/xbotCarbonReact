import React, { useState, useEffect } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function TilesPreviewer({ props }) {
  const { animate, data } = props,
        [previewArticle, setPreviewArticle] = useState(null),
        [tiles] = useState( loadTiles(data || placeholderData) );

  useEffect(() => { animatePreviewPane() }, [previewArticle])

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

  function animatePreviewPane() {
    const params = {
            previewCol: document.querySelector('.previewColumn'),
            previewPane: document.querySelector('.previewPane')
          }

    return previewArticle && animate.showPreviewPane(params)
  }

  function loadTiles(fromList) {
    return fromList.map((article, idx) => {
            const key = `articleTile_${article.id}`,
                  props = {
                    key,
                    activePreviewId: previewArticle && previewArticle.id,
                    headline: article.tileHeadline,
                    clickHandler: () => constClickHandler(key, article)
                  };
            return ArticleTile(props)
          })
      }

  function constClickHandler(key, article) {
      const args = {
              tile: document.getElementById(key),
              tileCol: document.querySelector('.tilesColumn'),
              tiles: document.querySelectorAll('.articlePreviewTile'),
              previewCol: document.querySelector('.previewColumn'),
              previewPane: document.querySelector('.previewPane'),
              setPreviewArticle: () => setPreviewArticle(article),
              tilesExpanded: document.querySelector('.previewColumn')
                .classList.contains('previewPaneShows')
            },

            func = !!args.tilesExpanded ?
                       animate.switchTiles : animate.collapseTiles ;

      return func(args)

    }

}
