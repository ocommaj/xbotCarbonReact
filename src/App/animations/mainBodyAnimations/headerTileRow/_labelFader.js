import { gsap } from 'gsap'

export default function labelFader() {
  const row = document.querySelector('bx--row.headerTileRow');
  if (row !== null) {
  const labels = row.querySelectorAll('.tileLabel.bannerMode'),
        labelArr = gsap.utils.toArray(labels),
        tl = gsap.timeline()
          .fader(labels);
    }
}
