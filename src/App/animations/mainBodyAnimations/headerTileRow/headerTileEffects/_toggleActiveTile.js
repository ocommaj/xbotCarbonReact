import { gsap } from 'gsap';

export default function initToggleActiveTile() {
  gsap.registerEffect({
    name: "toggleActiveTile",
    extendTimeline: true,
    effect: (target, config) => {
      const tile = target[0];
      const iconGraphic = tile.querySelector('.iconWrapper svg');
      const newBgColor = !!tile.classList.contains('activeSection')
              ? "rgba(15, 98, 254, 1)"
              : "rgba(0, 45, 156, 1)";

      return gsap.timeline({ onStart: () => _toggleActiveClass(tile) })
              .iconFlipper(iconGraphic)
              .changeElemBgColor({elem: tile, rgbaValue: newBgColor}, '<');
    }
  });

  function _toggleActiveClass(tile) {
      tile.classList.toggle('activeSection');
   }
};
