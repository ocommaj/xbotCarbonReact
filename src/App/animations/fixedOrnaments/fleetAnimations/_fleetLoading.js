import { gsap } from 'gsap'

export default function fleetLoading(params) {
  const { graphics } = params,
        tl = gsap.timeline({paused: true})
          .fader(graphics)
          .bobber(graphics);
  tl.play();
}
