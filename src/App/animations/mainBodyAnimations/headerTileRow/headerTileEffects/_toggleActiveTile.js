import { gsap } from 'gsap';

const initToggleActiveTile = () => {
  gsap.registerEffect({
    name: "toggleActiveTile",
    extendTimeline: true,
    effect: (target, config) => {
      const tile = target[0],
            iconGraphic = tile.querySelector('.iconWrapper svg'),
            newBgColor = !!tile.classList.contains('activeSection') ?
              "rgba(15, 98, 254, 1)" : "rgba(0, 45, 156, 1)",

            tl = gsap.timeline({ onStart: () => _toggleActiveClass(tile) })
              .iconFlipper(iconGraphic)
              .changeElemBgColor({elem: tile, rgbaValue: newBgColor}, '<');

      return tl;
    }
  })

  function _toggleActiveClass(tile) {
      tile.classList.toggle('activeSection');
   }
}

export default initToggleActiveTile;
