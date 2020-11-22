import { gsap } from 'gsap'

export default function spinOnX(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({
        defaults: {
          duration: .7,
          ease: "standard_productive" },
        paused: true
        })
        .spinGraphicX(graphic);
  tl.play()
}
