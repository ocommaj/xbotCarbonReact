import { gsap } from 'gsap'

export default function labelFader(target) {
        if (!target) return
  const labels = target.querySelectorAll('.tileLabel.bannerMode');
  return gsap.timeline({ paused: true }).fader(labels);
}
