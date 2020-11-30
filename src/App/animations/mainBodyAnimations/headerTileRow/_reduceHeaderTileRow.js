import { gsap } from 'gsap';

export default function reduceHeaderTileRow(args) {
  const { caller: fromTile } = args;
  const row = document.querySelector('.bx--row.headerTileRow');
  const tiles = row.querySelectorAll('.bx--tile.headerTile');
  return gsap.timeline({ paused: true, ease: "standard_expressive" })
          .toggleActiveTile(fromTile)
          .add(_collapseTiles(tiles, fromTile), '<.2')
          .set(row, { height: '4.5rem' });
};

const _collapseTiles = (tiles, fromTile) => {
  const tilesArr = gsap.utils.toArray(tiles);
  const labels = tilesArr.map(t => t.querySelector('.tileLabel') );
  const titles = labels.map(t => t.querySelector('.title') );
  const fromIdx = tilesArr.indexOf(fromTile);
  return gsap.timeline().collapseHeaderTiles({tiles, titles, idx: fromIdx});
};
