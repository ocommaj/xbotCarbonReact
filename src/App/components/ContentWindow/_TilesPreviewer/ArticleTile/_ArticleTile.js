import React, { useRef, useCallback } from 'react';
import { Tile, SkeletonPlaceholder } from 'carbon-components-react';

const DOM = {
  TILE: 'articlePreviewTile',
  ACTIVE_TAG: 'activeArticleTile'
};

export default function ArticleTile({props}) {
  const { clickHandler, headline, loading } = props;
  const tileRef = useRef();

  const onClick = useCallback(e => {
    if (e.currentTarget.classList.contains(DOM.ACTIVE_TAG)) return
    const { func, args } = clickHandler();
    args.tile = tileRef.current;
    func(args)
  }, [clickHandler]);

  if (!!loading) return <SkeletonPlaceholder className={ DOM.TILE } />
  return (
    <div
      className={ DOM.TILE }
      onClick={ e => onClick(e) }
      ref={tileRef}>
      <Tile>
        <h2>{ headline }</h2>
      </Tile>
    </div>
  )
}
