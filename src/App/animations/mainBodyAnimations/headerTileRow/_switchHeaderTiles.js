import { gsap } from 'gsap';

export default function switchActiveHeaderTiles(params) {
  const { caller: clickedTile, setActive } = params;
  const outgoingTile = document.querySelector('.headerTile.activeSection');
  if (outgoingTile === clickedTile) return

  const tl = gsap.timeline({
          paused: true,
          onComplete: () => setActive(clickedTile.id)
        })
          .toggleActiveTile(outgoingTile)
          .toggleActiveTile(clickedTile, '<');
  tl.play();
};
