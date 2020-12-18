import { gsap } from 'gsap';

export default function maximizePreviewPane(params) {
  const { tilesCol } = params;
  const tiles = gsap.utils.toArray(tilesCol.current.children);
  const tileContents = tiles.map(tile => tile.children[0]);
  
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(tileContents, { opacity: 0 })
          .to(tiles, { width: 0, opacity: 0 }, '<.3');
}
