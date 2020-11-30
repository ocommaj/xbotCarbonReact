import { gsap } from 'gsap';

export default function switchActiveHeaderTiles(args) {
  const { caller: clickedTile, DOM: { ACTIVE_CLASS, TILE_CLASS } } = args;
  const previous = document.querySelector(`.${TILE_CLASS}.${ACTIVE_CLASS}`);

  return gsap.timeline({ paused: true })
          .toggleActiveTile({ tile: previous, ACTIVE_CLASS })
          .toggleActiveTile({ tile: clickedTile, ACTIVE_CLASS }, '<');
};
