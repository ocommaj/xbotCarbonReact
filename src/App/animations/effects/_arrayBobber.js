import { gsap } from 'gsap'

const initArrayBobberEffect = () => {
  gsap.registerEffect({
    name: "bobber",
    effect: (targets, config) => {
      const tl = gsap.timeline({ delay: .4, repeat: -1, repeatDelay: .4,
                defaults: { duration: 1, ease: "standard_expressive" } })

      .to(targets, {
        rotateY: "-5deg",
        repeat: -1,
        yoyo: true,
        stagger: { amount: .4, from: 0 }} );

      return tl },
    extendTimeline: true })
}

export default initArrayBobberEffect
