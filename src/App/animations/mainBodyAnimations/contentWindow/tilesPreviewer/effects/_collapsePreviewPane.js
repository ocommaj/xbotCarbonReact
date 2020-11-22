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
                ease: "standard_productive"},
              })
                .to(previewPane.children, {
                  opacity: 0, duration: .5})
                .to(previewPane, {
                  opacity: 0 }, '<.2')
                .to(previewPane.children, {
                  width: 0}, '<');
        return tl
    },
    extendTimeline: true
  })
}
