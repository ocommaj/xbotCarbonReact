import { gsap } from 'gsap'

const initSpinGraphicX = () => {
  gsap.registerEffect({
    name: "spinGraphicX",
    effect: (graphic, config) => {
      const tl = gsap.timeline({ paused: false, defaults: { duration: .7 }})
              .to(graphic, {rotateX: '+=360deg'});
      return tl },
    extendTimeline: true })
}

export default initSpinGraphicX
