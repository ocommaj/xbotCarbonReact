import { gsap } from 'gsap';

export default function initSpinGraphicY() {
  gsap.registerEffect({
    name: "spinGraphicY",
    effect: (graphic, config) => {
      return gsap.timeline().to(graphic, { rotateY: '+=360deg' });
      },
    extendTimeline: true });
};
