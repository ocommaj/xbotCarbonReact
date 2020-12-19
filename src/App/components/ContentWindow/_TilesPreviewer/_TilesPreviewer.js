import React, { useRef, useState, useEffect } from 'react';
import ArticleTile from './ArticleTile';
import PreviewPane from './PreviewPane';
import { useArticlesQuery } from '@hooks/ApolloClient';

const DOM = {
  TOP_CLASS: "tilesPreviewer",
  OVERFLOW_WRAPPER: "overflowWrapper",
  TILES_COLUMN: "tilesColumn",
  PREVIEW_COLUMN: "previewColumn",
  ARTICLE_TILE: "articleTile"
}

export default function TilesPreviewer({ props }) {
  const { animate, activeSection: { apolloQuery } } = props;
  const query = {
    input: apolloQuery.input,
    pattern: apolloQuery.previewTile
  };

  const previewCol = useRef();
  const previewPane = useRef();
  const tilesCol = useRef();
  const [tiles, setTiles] = useState([])
  const [previewArticle, setPreviewArticle] = useState(null);
  const { queryResponse, queryLoading } = useArticlesQuery(query);

  useEffect(() => {
    if (!queryResponse) return
    const { articles } = queryResponse.tutorials;
    setTiles(articles)
  }, [queryResponse])

  return (
    <div className={ DOM.TOP_CLASS }>
      <div className={ DOM.OVERFLOW_WRAPPER }>
        <div className={ DOM.TILES_COLUMN } ref={ tilesCol }>
          { tiles.map((article) => {
              const props = previewTileProps(article);
              return <ArticleTile key={ props.key } props={ props } />
            })
          }
        </div>
        <div className={ DOM.PREVIEW_COLUMN } ref={ previewCol }>
          <PreviewPane
            ref= { previewPane }
            article={ previewArticle || null }
            maximize={ () => animate.maximizePane({ tilesCol }) }
            normalize={ () => animate.reducePane({ tilesCol, previewPane }) }
          />
        </div>
      </div>
    </div>
  )

  function previewTileProps(article) {
    return {
      clickHandler() { return constClickHandler(article) },
      key: `${DOM.ARTICLE_TILE}_${article._id}`,
      activePreviewId: previewArticle && previewArticle.id,
      headline: article.title,
      loading: queryLoading,
    }
  };

  function constClickHandler(article) {
    const previewShows = previewCol.current.classList.contains('visible');
    return {
      func: previewShows ? animate.switchTiles : animate.collapseTiles,
      args: {
        tileCol: tilesCol.current,
        previewCol: previewCol.current,
        previewPane: previewPane.current,
        setPreviewArticle() { return setPreviewArticle(article) },
      }
    }
  };

}
