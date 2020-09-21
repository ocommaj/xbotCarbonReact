import { gsap } from 'gsap'

const initRestyleHeaderLabel = () => {
  gsap.registerEffect({
    name: "restyleHeaderLabel",
    effect: (label, config) => {
      const tl = gsap.timeline({
              defaults: {
                duration: .4,
                transformOrigin: "bottom center"} })
              .to(label, { opacity: 0, scaleY: .1 })
              .set(label, {
                fontSize: "1.75rem",
                lineHeight: "2.25rem",
                fontWeight: 400})
              .to(label, { opacity: 1, scaleY: 1 })

      return tl
    },
    extendTimeline: true
  })
}

export default initRestyleHeaderLabel
