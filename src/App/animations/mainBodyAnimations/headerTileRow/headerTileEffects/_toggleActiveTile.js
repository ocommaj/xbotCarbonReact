import { gsap } from 'gsap'

const initToggleActiveTile = () => {
  gsap.registerEffect({
    name: "toggleActiveTile",
    effect: (target, config) => {
      const tile = target[0],
            alreadyActive = tile.classList.contains('activeSection'),
            iconGraphic = tile.querySelector('.iconWrapper svg'),
            newBgColor = alreadyActive === true ?
              "rgba(15, 98, 254, 1)" : "rgba(0, 45, 156, 1)",

            tl = gsap.timeline({
              onComplete: () => tile.classList.toggle('activeSection')
            })
              .iconFlipper(iconGraphic)
              .changeElemBgColor({elem: tile, rgbaValue: newBgColor}, '<');
      return tl

    },
    extendTimeline: true
  })
}

export default initToggleActiveTile
