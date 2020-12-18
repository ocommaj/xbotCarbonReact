import { gsap } from 'gsap';

export default function initRestyleHeaderLabel() {
  gsap.registerEffect({
    name: "restyleHeaderLabel",
    effect: (labels, config) => {
      return gsap.timeline({
              defaults: {
                duration: .4,
                ease: "standard_productive",
              } })
              .to(labels, { opacity: 0, scaleY: .1 })
              .add( () => _toggleLabelClass(labels) )
              .to(labels, { opacity: 1, scaleY: 1 });
          },
    extendTimeline: true
  });

  function _toggleLabelClass(labels) {
    const useSmaller = window.matchMedia('(max-width: 1000px)')
    const toSize = !!useSmaller.matches ? 'small' : 'medium';

    for (let label of labels) {
        label.classList.toggle('large');
        label.classList.toggle(toSize);
      };
   };
};
