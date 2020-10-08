import { gsap } from 'gsap'

export default function reduceHeaderTileRow(params) {
  const { caller: fromTile, setActiveId } = params,
        row = document.querySelector('.bx--row.headerTileRow'),
        tiles = row.querySelectorAll('.bx--tile.headerTile'),
        tl = gsap.timeline({
          paused: true,
          onComplete: () => { setActiveId(fromTile.id) }
        })
          .toggleActiveTile(fromTile)
          .add(_collapseTiles(tiles, fromTile), '<.2')
          .set(row, { height: '4.5rem' })
        tl.play()
}

const _collapseTiles = (tiles, fromTile) => {
  const tilesArr = gsap.utils.toArray(tiles),
        labels = tilesArr.map(t => t.querySelector('.tileLabel .title') ),
        fromIdx = tilesArr.indexOf(fromTile),
        tl = gsap.timeline()
          .collapseHeaderTiles({tiles, labels, idx: fromIdx});
  return tl
}
