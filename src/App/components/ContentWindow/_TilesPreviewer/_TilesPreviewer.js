import React, { useRef, useState, useEffect } from 'react';
import ArticleTile from './ArticleTile';
import PreviewPane from './PreviewPane';
import { useArticlesQuery } from '@hooks/ApolloClient';

import placeholderData from './_placeholderData';

export default function TilesPreviewer({ props }) {
  const { animate, activeSection: { apolloBaseQuery } } = props;
  const input = { articleQuery: { ...apolloBaseQuery } };

  const previewCol = useRef();
  const previewPane = useRef();
  const tilesCol = useRef();
  const [previewArticle, setPreviewArticle] = useState(null);
  const { articles, queryLoading } = useArticlesQuery(input);

  useEffect(() => console.dir(articles), [articles]);

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
          { placeholderData.map((article) => {
              const props = previewTileProps(article);
              return <ArticleTile key={ props.key } props={ props } />
            })
          }
        </div>
        <div className="previewColumn" ref={ previewCol }>
          { previewArticle &&
            <PreviewPane
              ref= { previewPane }
              article={ previewArticle }
              maximize={ animate.maximizePane({ tilesCol }) }
              normalize={ animate.reducePane({ tilesCol, previewPane }) }
            />
          }
        </div>
      </div>
    </div>
  )

  function previewTileProps(article) {
    return {
      clickHandler() { return constClickHandler(article) },
      key: `articleTile_${article.id}`,
      activePreviewId: previewArticle && previewArticle.id,
      headline: article.tileHeadline,
      loading: queryLoading,
    }
  };

  function constClickHandler(article) {
    const previewShows = previewCol.current.classList.contains('visible');
    return {
      func: previewShows ? animate.switchTiles : animate.collapseTiles,
      args: {
        previewShows: previewShows,
        tileCol: tilesCol.current,
        previewCol: previewCol.current,
        previewPane: previewPane.current,
        setPreviewArticle() { return setPreviewArticle(article) },
      }
    }
  };

}
