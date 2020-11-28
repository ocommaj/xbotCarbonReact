import { gsap } from 'gsap';

export default function initHideByHeightToZero() {
  gsap.registerEffect({
    name: "hideByHeightToZero",
    effect: (target, config) => {
      return gsap.timeline({
        immediateRender: true,
        defaults: {
          duration: 1,
          transformOrigin: "50% 50%",
          ease: 'exit_expressive'
        }})
        .to(target, {
            scaleY: 0,
            opacity: 0,
            onComplete: () => target[0].remove()
          });
        },
    extendTimeline: true
  });
};
