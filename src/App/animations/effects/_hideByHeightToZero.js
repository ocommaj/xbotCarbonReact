import { gsap } from 'gsap'

const initHideByHeightToZero = () => {
  gsap.registerEffect({
    name: "hideByHeightToZero",
    effect: (target, config) => {
      const tl = gsap.timeline({
        immediateRender: true,
        defaults: {
          duration: 1, transformOrigin: "50% 50%",
          ease: 'exit_expressive'
        }});

        tl.to(target, {
            scaleY: 0,
            opacity: 0,
            onComplete: () => target[0].remove()
          })

      return tl },

    extendTimeline: true
  })
}

export default initHideByHeightToZero
