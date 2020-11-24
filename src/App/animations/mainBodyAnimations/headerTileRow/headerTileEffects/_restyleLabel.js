import { gsap } from 'gsap'

const initRestyleHeaderLabel = () => {
  gsap.registerEffect({
    name: "restyleHeaderLabel",
    effect: (labels, config) => {
      const tl = gsap.timeline({
              defaults: {
                duration: .4,
                ease: "standard_productive",
                //transformOrigin: "bottom center"
              } })
              .to(labels, { opacity: 0, scaleY: .1 })
              .add( () => _toggleLabelClass(labels) )
              .to(labels, { opacity: 1, scaleY: 1 })
      return tl
    },
    extendTimeline: true
  })

  function _toggleLabelClass(labels) {
    for (let label of labels) {
      label.classList.toggle('large')
      label.classList.toggle('medium')
     }
   }

}

export default initRestyleHeaderLabel
