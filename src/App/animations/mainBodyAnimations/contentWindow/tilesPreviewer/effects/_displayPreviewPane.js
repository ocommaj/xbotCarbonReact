import { gsap } from 'gsap';

export default function initDisplayPreviewPane() {
  gsap.registerEffect({
    name: 'displayPreviewPane',
    extendTimeline: true,
    effect: (target, config) => {
      const { previewCol, previewPane } = [...target][0];
      const childNodes = gsap.utils.toArray(previewPane.children);
      return gsap.timeline({
        defaults: {
          duration: 1,
          ease: "standard_productive"},
        })
        .set(previewPane, { marginLeft: '1rem' })
        .set(previewCol, {flex: 'auto'})
        .to(previewPane, { right: 0, padding: '0.5rem', opacity: "100%" }, '<')
        .to(previewPane, { bottom: 0 }, '<.4')
        .to(childNodes, { opacity: "100%" }, '<')
        .call( () => previewCol.classList.toggle('visible') );
      }
  });
};
