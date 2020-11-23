import React, { useRef, useCallback } from 'react'
import { Tile } from 'carbon-components-react'

export default function ArticleTile({props}) {
  const { clickHandler, headline } = props;
  const tileRef = useRef();

  const onClick = useCallback(e => {
    if (e.currentTarget.classList.contains('activeArticleTile')) return

    const [func, args] = clickHandler();
    args.tile = tileRef.current;
    func(args)
  }, [clickHandler])

  return (
    <div
      className="articlePreviewTile"
      onClick={ e => onClick(e) }
      ref={tileRef}>
      <Tile>
        <h2>{ headline }</h2>
      </Tile>
    </div>
  )
}
