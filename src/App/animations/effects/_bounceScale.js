import { gsap } from 'gsap';

export default function initBounceScale() {
  gsap.registerEffect({
    name: "bounceScale",
    effect: (graphic, config) => {
      return gsap.timeline({ defaults: {
          duration: .4,
          ease: 'standard_expressive'
        }})
        .to(graphic, {scale: 1.1})
        .to(graphic, {scale: 1});
      },
    extendTimeline: true });
};
