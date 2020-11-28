import { gsap } from 'gsap'

const initFadeFlipEffect = () => {
  gsap.registerEffect({
    name: "fadeFlip",
    effect: (target, config) => {
      const { element } = [...target][0];
      return gsap.timeline()
              .fromTo(element, {
                scaleY: 0, opacity: 0, ease: "entrance_expressive"
              }, {
                scaleY: 1, opacity: 1 })
              .to(element, {
                scaleY: 0, opacity: 0, delay: 1.4, ease: "exit_expressive" });
            },
    extendTimeline: true
  })
}

export default initFadeFlipEffect
