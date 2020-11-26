import { gsap } from 'gsap'

export default function maximizePreviewPane(params) {
  const { tilesCol } = params,
        tl = gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(tilesCol.current, {width: 0, opacity: 0}, '<');

  return tl;
}
