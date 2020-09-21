import { gsap } from 'gsap'

export default function fleetLoading(params) {
  const { graphics } = params,
        tl = gsap.timeline();

  tl.fader(graphics)
  tl.bobber(graphics)
}
