import { gsap } from 'gsap';

export default function initCollapseHeaderTiles() {
  gsap.registerEffect({
    name: "collapseHeaderTiles",
    effect: (target, config) => {
      const { tiles, titles, idx } = [...target][0];
      return gsap.timeline({
              defaults: {
                duration: 1,
                ease: "standard_productive",
                transformOrigin: "bottom center",
                stagger: {amount: .2, from: idx}
              } })
            .to(tiles, {height: "4.5rem" })
            .restyleHeaderLabel(titles, '<');
      },
    extendTimeline: true
  });
};
