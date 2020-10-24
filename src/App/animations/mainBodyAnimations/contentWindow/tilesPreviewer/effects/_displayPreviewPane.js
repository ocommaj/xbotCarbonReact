import { gsap } from 'gsap'

export default function initDisplayPreviewPane() {
  gsap.registerEffect({
    name: 'displayPreviewPane',
    effect: (target, config) => {
      const { previewCol, previewPane } = [...target][0],
            tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"},
              })
                .set(previewPane.children, {width: 'auto'})
                .to(previewCol, {flexGrow: 1})
                .to(previewPane, {opacity: "100%", flexGrow: 1}, '<')
                .to(previewPane.children, { opacity: "100%"}, '<');
        return tl
    },
    extendTimeline: true
  })
}
