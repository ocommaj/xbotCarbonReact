import React, { useState, useCallback, useRef, useEffect } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function TilesPreviewer({ props }) {
  const { animate, data } = props,
        previewColumn = useRef(),
        previewPane = useRef(),
        tilesColumn = useRef(),
        tileRef = useRef();

  const [previewArticle, setPreviewArticle] = useState(null),
        [tiles] = useState( loadTiles(data || placeholderData) );

  const animatePreviewPane = useCallback(() => {
    if (!previewArticle) return
    return animate.showPreviewPane({
      previewCol: previewColumn.current,
      previewPane: previewPane.current
    })
  }, [animate, previewArticle])

  useEffect(() => animatePreviewPane(), [animatePreviewPane])

  return (
    <div className="tilesPreviewer">
      <div className="overflowWrapper">
        <div className="tilesColumn" ref={ tilesColumn }>
          { tiles }
        </div>
        <div className="previewColumn" ref={ previewColumn }>
          { previewArticle &&
            <PreviewPane
              ref= { previewPane }
              props={previewArticle}
            />
          }
        </div>
      </div>
    </div>
  )

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


  function constClickHandler(key, article) {
      const args = {
              tile: document.getElementById(key),
              tileCol: tilesColumn.current,
              tiles: tilesColumn.current
                                .querySelectorAll('.articlePreviewTile'),
              previewCol: previewColumn.current,
              previewPane: previewPane.current,
              setPreviewArticle: () => setPreviewArticle(article),
              tilesExpanded: previewColumn.current.classList
                                          .contains('previewPaneShows')
            },

            func = !!args.tilesExpanded ?
                       animate.switchTiles : animate.collapseTiles ;

      return func(args)

    }
  }

}
