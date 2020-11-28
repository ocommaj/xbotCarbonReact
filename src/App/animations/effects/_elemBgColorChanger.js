import { gsap } from 'gsap';

export default function initElemBgColorChangerEffect() {
  gsap.registerEffect({
    name: 'changeElemBgColor',
    effect: (target, config) => {
      const {
        elem,
        rgbaValue
      } = [...target][0];

      return gsap.timeline()
        .to(elem, { backgroundColor: rgbaValue, ease: 'standard_expressive' });
      },
    extendTimeline: true
  });
};
