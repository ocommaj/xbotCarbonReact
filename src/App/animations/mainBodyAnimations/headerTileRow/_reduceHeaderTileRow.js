import { gsap } from 'gsap';

export default function reduceHeaderTileRow(params) {
  const { caller: fromTile, setActiveId } = params;
  const row = document.querySelector('.bx--row.headerTileRow');
  const tiles = row.querySelectorAll('.bx--tile.headerTile');
  const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "standard_expressive" },
          onComplete: () => setActiveId(fromTile.id)
        })
          .toggleActiveTile(fromTile)
          .add(_collapseTiles(tiles, fromTile), '<.2')
          .set(row, { height: '4.5rem' });
  tl.play();
};

const _collapseTiles = (tiles, fromTile) => {
  const tilesArr = gsap.utils.toArray(tiles);
  const labels = tilesArr.map(t => t.querySelector('.tileLabel') );
  const titles = labels.map(t => t.querySelector('.title') );
  const fromIdx = tilesArr.indexOf(fromTile);
  return gsap.timeline().collapseHeaderTiles({tiles, titles, idx: fromIdx});
};
