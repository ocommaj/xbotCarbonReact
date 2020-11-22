import { gsap } from 'gsap'

export default function spinOnZ(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({
        defaults: {
          duration: .7,
          ease: "standard_productive" },
        paused: true
        })
        .spinGraphicZ(graphic);
  tl.play()
}
