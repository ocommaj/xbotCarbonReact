import { gsap } from 'gsap';

export default function initToggleActiveTile() {
  gsap.registerEffect({
    name: "toggleActiveTile",
    extendTimeline: true,
    effect: (target, config) => {
      const { tile, ACTIVE_CLASS } = target[0];
      const toggleClass = () => tile.classList.toggle(ACTIVE_CLASS);
      const iconGraphic = tile.querySelector('.iconWrapper svg');
      const newBgColor = !!tile.classList.contains(ACTIVE_CLASS)
              ? "rgba(15, 98, 254, 1)"
              : "rgba(0, 45, 156, 1)";

      return gsap.timeline({ onStart: () => toggleClass() })
              .iconFlipper(iconGraphic)
              .changeElemBgColor({elem: tile, rgbaValue: newBgColor}, '<');
    }
  });

};
