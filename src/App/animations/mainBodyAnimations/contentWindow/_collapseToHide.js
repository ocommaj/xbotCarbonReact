import { gsap } from 'gsap';

export default function collapseToHide({ windowRef }) {
  const contentWindow = windowRef.current;

  return gsap.timeline({
          paused: true,
          defaults: {
            duration: .7,
            ease: "exit_expressive",
            smoothChildTiming: true,
          },
        })
          .to(contentWindow, { height: 0 })


};
