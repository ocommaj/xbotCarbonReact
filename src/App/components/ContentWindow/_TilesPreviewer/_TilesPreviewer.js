import React, { useContext, useEffect, useRef, useState } from 'react';
import ArticleTile from './ArticleTile';
import PreviewPane from './PreviewPane';
import { AppContext } from '@App';
import { useArticlesQuery } from '@hooks/ApolloClient';
import DOM from './_DOMkeys';

export default function TilesPreviewer({ props }) {
  const { animate, activeSection: { apolloQuery } } = props;
  const { readingList } = useContext(AppContext);
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
    if (!!queryLoading)
    if (!queryResponse) return
    const { articles } = queryResponse.tutorials;
    setTiles(articles)
  }, [queryLoading, queryResponse])

  return (
    <div className={ DOM.TOP_CLASS }>
      <div className={ DOM.OVERFLOW_WRAPPER }>
        <div className={ DOM.TILES_COLUMN } ref={ tilesCol }>
          { !!tiles.length ?
              tiles.map((article) => {
                const props = previewTileProps(article);
                return <ArticleTile key={ props.key } props={ props } />
              })
              : Array.from(Array(10)).map((_, i) => {
                const props = { loading: true }
                return <ArticleTile key={ `skeleton_${i}`} props={ props } />
              })
          }
        </div>
        <div className={ DOM.PREVIEW_COLUMN } ref={ previewCol }>
          <PreviewPane
            ref= { previewPane }
            article={ previewArticle || null }
            maximize={ () => animate.maximizePane({ tilesCol }) }
            normalize={ () => animate.reducePane({ tilesCol, previewPane }) }
            isInReadingList={
              previewArticle && isInReadingList(previewArticle._id)
            }
          />
        </div>
      </div>
    </div>
  )

  function previewTileProps(article) {
    return {
      clickHandler() { return constClickHandler(article) },
      key: `${DOM.ARTICLE_TILE}_${article._id}`,
      activePreviewId: previewArticle && previewArticle._id,
      headline: article.title,
      loading: queryLoading,
      isInReadingList: isInReadingList(article._id),
    }
  };

  function constClickHandler(article) {
    const previewShows = previewCol.current.classList.contains(DOM.VISIBLE);
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

  function isInReadingList(id) {
    for (const item of readingList) {
      if (item._id === id) return true
    }
  };

}
