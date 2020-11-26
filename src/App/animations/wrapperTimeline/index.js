import { gsap } from 'gsap';

export default function WrapperTimeline() {
  const timeline = gsap.timeline({
    defaults: {
      duration: .7,
      ease: "standard_productive"
    }
  })

  return timeline
}
