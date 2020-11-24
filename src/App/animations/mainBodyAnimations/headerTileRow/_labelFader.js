import { gsap } from 'gsap'

export default function labelFader(target) {
        if (!target) return
  const labels = target.querySelectorAll('.tileLabel.bannerMode');
  const labelArr = gsap.utils.toArray(labels),
        tl = gsap.timeline({ paused: true })
          .fader(labels);
  return tl;

}
