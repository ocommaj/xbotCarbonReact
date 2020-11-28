import { gsap } from 'gsap';

export default function initIconFlipperEffect() {
  gsap.registerEffect({
    name: "iconFlipper",
    effect: (graphic, config) => {
      return gsap.timeline()
              .to(graphic, {rotateY: '-=180deg'})
              .to(graphic, {rotateZ: '-=180deg'}, '<.2');
      },
    extendTimeline: true });
};
