import { gsap } from 'gsap'

export default function initResizePreviewTiles() {
  gsap.registerEffect({
    name: 'resizeArticlePreviewTiles',
    effect: (target, config) => {
      const { tile, tiles, tilesExpanded } = [...target][0],
            tilesArr = gsap.utils.toArray(tiles),
            idx = tilesArr.indexOf(tile),
            deltaWidth = !!tilesExpanded ? "+=480px" : "-=480px",
            tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: "cubic-bezier(0.2, 0, 0.38, 0.9)",
                transformOrigin: "center left",
                stagger: {amount: .2, from: idx}
                } })
              .to(tiles, { width: deltaWidth, duration: .4 });
      return tl
      },
    extendTimeline: true
    })
  }
