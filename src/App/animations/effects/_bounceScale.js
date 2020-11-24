import { gsap } from 'gsap'

const initBounceScale = () => {
  gsap.registerEffect({
    name: "bounceScale",
    effect: (graphic, config) => {
      const tl = gsap.timeline({ paused: false, defaults: {
        duration: .4,
        ease: 'standard_expressive'
      }})
              .to(graphic, {scale: 1.1})
              .to(graphic, {scale: 1});
      return tl },
    extendTimeline: true })
}

export default initBounceScale
