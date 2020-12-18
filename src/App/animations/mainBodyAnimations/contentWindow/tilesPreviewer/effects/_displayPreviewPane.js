import { gsap } from 'gsap';

export default function initDisplayPreviewPane() {
  gsap.registerEffect({
    name: 'displayPreviewPane',
    effect: (target, config) => {
      const { previewCol, previewPane } = [...target][0];
            return gsap.timeline({
              defaults: {
                duration: 1,
                ease: "standard_productive"},
              })
                .set(previewPane, { marginLeft: '1rem' })
                .set(previewCol, {flex: 'auto'})
                .to(previewPane, { right: 0, opacity: "100%" }, '<')
                .to(previewPane, { bottom: 0 }, '<.4')
                .to(previewPane.children, { opacity: "100%"}, '<')
                .call( () => previewCol.classList.toggle('visible') );
            },
    extendTimeline: true
  });
};
