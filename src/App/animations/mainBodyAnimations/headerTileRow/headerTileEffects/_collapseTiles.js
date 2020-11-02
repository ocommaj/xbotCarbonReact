import { gsap } from 'gsap'

const initCollapseHeaderTiles = () => {
  gsap.registerEffect({
    name: "collapseHeaderTiles",
    effect: (target, config) => {
      const { tiles, titles, idx } = [...target][0],
            tl = gsap.timeline({
              defaults: {
                duration: 1,
                ease: "cubic-bezier(0.2, 0, 0.38, 0.9)",
                transformOrigin: "bottom center",
                stagger: {amount: .2, from: idx}
              } })
            .to(tiles, {height: "4.5rem" })
            .restyleHeaderLabel(titles, '<');

      return tl
      },
    extendTimeline: true
  })
}

export default initCollapseHeaderTiles
