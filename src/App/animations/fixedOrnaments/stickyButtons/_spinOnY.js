import { gsap } from 'gsap'

export default function spinOnY(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({
        defaults: {
          duration: .7,
          ease: "standard_productive" },
        paused: true
        })
        .spinGraphicY(graphic);
  tl.play()
}
