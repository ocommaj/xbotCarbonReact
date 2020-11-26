import { gsap } from 'gsap'

const initTextFlipEffect = () => {
  gsap.registerEffect({
    name: "textFlip",
    effect: (target, config) => {
      const {
        inComp,
        switchTextOnRepeat
      } = [...target][0];

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.4,
        yoyo: true,
        defaults: { duration: .7, ease: "standard_expressive" },
        smoothChildTiming: true,
        onRepeat: () => switchTextOnRepeat()
       })

      tl.to(inComp, {
        scaleY: 0,
        //transformOrigin: "center center",
        opacity: 0
      })
      return tl },
    extendTimeline: true
  })
}

export default initTextFlipEffect
