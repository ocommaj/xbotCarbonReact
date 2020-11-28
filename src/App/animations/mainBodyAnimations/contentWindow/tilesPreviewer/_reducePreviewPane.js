import { gsap } from 'gsap'

export default function reducePreviewPane(params) {
  const { tilesCol, previewPane } = params;
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(previewPane.current, {width: '480px'})
          .to(tilesCol.current, {width: 'auto', opacity: 100}, '<')
          .set(previewPane.current, {width: 'auto'});
}
