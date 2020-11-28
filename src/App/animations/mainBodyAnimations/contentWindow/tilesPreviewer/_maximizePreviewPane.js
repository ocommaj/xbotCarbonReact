import { gsap } from 'gsap';

export default function maximizePreviewPane(params) {
  const { tilesCol } = params;
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(tilesCol.current, {width: 0, opacity: 0}, '<');
}
