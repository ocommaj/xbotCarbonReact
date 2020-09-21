import { gsap } from 'gsap'

const initIconFlipperEffect = () => {
  gsap.registerEffect({
    name: "iconFlipper",
    effect: (graphic, config) => {
      const tl = gsap.timeline({ paused: false, defaults: { duration: .7 }})
              .to(graphic, {rotateY: '-=180deg'})
              .to(graphic, {rotateZ: '-=180deg'}, '<.2');
      return tl },
    extendTimeline: true })
}

export default initIconFlipperEffect
