import { gsap } from 'gsap'

export default function initCollapsePreviewPane() {
  gsap.registerEffect({
    name: 'collapsePreviewPane',
    effect: (target, config) => {
      const { previewPane } = [...target][0],
            tl = gsap.timeline({
              defaults: {
                duration: 1,
                transformOrigin: "center right",
                ease: "cubic-bezier(0.2, 0, 0.38, 0.9)"},
              })
                .to(previewPane.children, {
                  opacity: 0,
                  width: 0,
                  duration: .5})
                .to(previewPane, {opacity: 0 }, '<');
        return tl
    },
    extendTimeline: true
  })
}
