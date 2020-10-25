import { gsap } from 'gsap'

const initSpinGraphicZ = () => {
  gsap.registerEffect({
    name: "spinGraphicZ",
    effect: (graphic, config) => {
      const tl = gsap.timeline({ paused: false, defaults: { duration: .7 }})
              .to(graphic, {rotateZ: '+=360deg'});
      return tl },
    extendTimeline: true })
}

export default initSpinGraphicZ
