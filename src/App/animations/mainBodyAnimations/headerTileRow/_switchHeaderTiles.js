import { gsap } from 'gsap';

export default function switchActiveHeaderTiles(args) {
  const { caller: clickedTile } = args;
  const outgoingTile = document.querySelector('.headerTile.activeSection');
  if (outgoingTile === clickedTile) return

  return gsap.timeline({ paused: true })
          .toggleActiveTile(outgoingTile)
          .toggleActiveTile(clickedTile, '<');
};
