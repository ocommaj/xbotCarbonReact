import { gsap } from 'gsap'

const initSpinGraphicY = () => {
  gsap.registerEffect({
    name: "spinGraphicY",
    effect: (graphic, config) => {
      const tl = gsap.timeline({ paused: false, defaults: { duration: .7 }})
              .to(graphic, {rotateY: '+=360deg'});
      return tl },
    extendTimeline: true })
}

export default initSpinGraphicY
