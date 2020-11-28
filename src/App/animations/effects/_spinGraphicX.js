import { gsap } from 'gsap';

export default function initSpinGraphicX() {
  gsap.registerEffect({
    name: "spinGraphicX",
    effect: (graphic, config) => {
      return gsap.timeline().to(graphic, {rotateX: '+=360deg'});
      },
    extendTimeline: true });
};
