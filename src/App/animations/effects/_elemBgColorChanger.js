import { gsap } from 'gsap'

const initElemBgColorChangerEffect = () => {
  gsap.registerEffect({
    name: 'changeElemBgColor',
    effect: (target, config) => {
      const {
        elem,
        rgbaValue
      } = [...target][0];

      const tl = gsap.timeline({
        defaults: {
          duration: .7,
          ease: "standard_expressive" }
      });

      tl.to(elem, {
        backgroundColor: rgbaValue
      })
      return tl
      },
    extendTimeline: true
  })
}

export default initElemBgColorChangerEffect
