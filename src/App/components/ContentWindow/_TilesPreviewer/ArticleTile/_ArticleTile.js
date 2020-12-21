import React, { useRef, useCallback } from 'react';
import { Tile, SkeletonPlaceholder } from 'carbon-components-react';
import { Attachment32 } from '@carbon/icons-react';

const DOM = {
  WRAPPER: 'articlePreviewTile',
  ACTIVE_TAG: 'activeArticleTile',
  RD_LIST_ICON: "inReadingListIcon"
};

export default function ArticleTile({props}) {
  const { clickHandler, headline, loading, isInReadingList } = props;
  const tileRef = useRef();

  const onClick = useCallback(e => {
    if (e.currentTarget.classList.contains(DOM.ACTIVE_TAG)) return
    const { func, args } = clickHandler();
    args.tile = tileRef.current;
    func(args)
  }, [clickHandler]);

  if (!!loading) return <SkeletonPlaceholder className={ DOM.WRAPPER } />
  return (
    <div
      className={ DOM.WRAPPER }
      onClick={ e => onClick(e) }
      ref={tileRef}>
      <Tile>
        <h2>{ headline }</h2>
        { isInReadingList && <Attachment32 className={ DOM.RD_LIST_ICON } /> }
      </Tile>
    </div>
  )
}
