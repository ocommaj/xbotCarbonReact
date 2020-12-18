import { gsap } from 'gsap';

export default function initResizePreviewTiles() {
  gsap.registerEffect({
    name: 'resizeArticlePreviewTiles',
    extendTimeline: true,
    effect: (target, config) => {
      const { tiles, transform: { idx, delta } } = [...target][0];
      return gsap.timeline({
              defaults: {
                duration: 1,
                ease: "standard_productive",
                transformOrigin: "center left",
                stagger: { amount: .2, from: idx }
                } })
              .to(tiles, { width: delta, duration: .4 });
        }
  });
}
