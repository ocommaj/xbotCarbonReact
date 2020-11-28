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
                .set(previewPane.children, {width: 'auto'})
                .to(previewCol, {flexGrow: 1})
                .to(previewPane, {opacity: "100%", flexGrow: 1}, '<')
                .to(previewPane.children, { opacity: "100%"}, '<');
            },
    extendTimeline: true
  });
};
