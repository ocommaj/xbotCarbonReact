import { gsap } from 'gsap';

export default function reducePreviewPane(params) {
  const { tilesCol, previewPane } = params;
  const deltaWidth = previewPane.current.clientWidth * .4;
  const tiles = gsap.utils.toArray(tilesCol.current.children);
  const tileContents = tiles.map(tile => tile.children[0]);

  return gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(tiles, { width: deltaWidth, opacity: 1 })
          .to(tileContents, { opacity: 1 }, '<.3');
}
