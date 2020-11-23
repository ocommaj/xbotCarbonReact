import React, { useRef, useState, useEffect } from 'react'
import ArticleTile from './ArticleTile'
import PreviewPane from './PreviewPane'

import placeholderData from './_placeholderData'

export default function TilesPreviewer({ props }) {
  const { animate, data } = props,
        previewCol = useRef(),
        previewPane = useRef(),
        tilesCol = useRef();

  const [previewArticle, setPreviewArticle] = useState(null),
        [tiles] = useState( loadTiles(data || placeholderData) );

  useEffect(() => {
    if (!previewArticle) return
    animate.showPreviewPane({
      previewCol: previewCol.current,
      previewPane: previewPane.current
    })
  }, [animate, previewArticle])

  return (
    <div className="tilesPreviewer">
      <div className="overflowWrapper">
        <div className="tilesColumn" ref={ tilesCol }>
          { tiles }
        </div>
        <div className="previewColumn" ref={ previewCol }>
          { previewArticle &&
            <PreviewPane
              ref= { previewPane }
              props={ previewArticle }
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
                    clickHandler: () => constClickHandler(article)
                  };
            return <ArticleTile key={key} props={props} />
          })


    function constClickHandler(article) {
      const previewShows = previewCol.current.classList.contains('visible');
      const func = previewShows ? animate.switchTiles : animate.collapseTiles;
      const args = {
        previewShows: previewShows,
        tileCol: tilesCol.current,
        previewCol: previewCol.current,
        previewPane: previewPane.current,
        setPreviewArticle: () => setPreviewArticle(article),
      };

      return [func, args]
    }
  }
}
