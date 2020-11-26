import { gsap } from 'gsap'

const initArrayFaderEffect = () => {
  gsap.registerEffect({
        name: "fader",
        effect: (targets, config) => {
          const tl = gsap.timeline({ delay: .4, repeat: -1, repeatDelay: .4,
                    defaults: { duration: 1, ease: "standard_expressive" } })

          .to(targets, {
            opacity: "-=.3",
            repeat: -1,
            yoyo: true,
            stagger: { amount: .4, from: 1 } });

          return tl },
        extendTimeline: true });
}

export default initArrayFaderEffect
