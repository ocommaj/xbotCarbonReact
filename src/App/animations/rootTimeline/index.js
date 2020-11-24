import { gsap } from 'gsap';
import defineCustomEases from './_carbonEases';

export default function RootTimeline() {
  defineCustomEases()
  const timeline = gsap.timeline({
    //repeat: -1,
    defaults: {
      duration: .7,
      ease: "standard_productive"
    }
  })

  return timeline
}
