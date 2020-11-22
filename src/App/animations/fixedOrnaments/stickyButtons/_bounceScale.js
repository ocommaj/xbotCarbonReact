import { gsap } from 'gsap'

export default function bounceScale(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({
        defaults: {
          duration: .7,
          ease: "standard_expressive" },
        paused: true
        })
        .bounceScale(graphic);
  tl.play()
}
