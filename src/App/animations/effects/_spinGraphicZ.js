import { gsap } from 'gsap';

export default function initSpinGraphicZ() {
  gsap.registerEffect({
    name: "spinGraphicZ",
    effect: (graphic, config) => {
      return gsap.timeline().to(graphic, { rotateZ: '+=360deg'});
      },
    extendTimeline: true });
};
