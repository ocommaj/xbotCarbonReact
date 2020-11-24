import { gsap } from 'gsap'

export default function reducePreviewPane(params) {
  console.log('firing in animation')
  const { tilesCol, previewPane } = params,
        tl = gsap.timeline({
          paused: true,
          defaults: { ease: 'standard_expressive' }
        })
          .to(previewPane.current, {width: '480px'})
          .to(tilesCol.current, {width: 'auto', opacity: 100}, '<')
          .set(previewPane.current, {width: 'auto'});
  return tl
}
