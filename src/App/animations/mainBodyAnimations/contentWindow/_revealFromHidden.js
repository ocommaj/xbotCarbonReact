import { gsap } from 'gsap';

export default function revealFromHidden({ rowRef, windowRef }) {
  const contentRow = rowRef.current;
  const contentWindow = windowRef.current;

  if (contentWindow) {
    const padding = window.getComputedStyle(contentRow)
                          .getPropertyValue('padding-top').slice(0,2);
    const targetHeight = contentRow.clientHeight;
    const windowHeight = targetHeight - padding*2;
    return gsap.timeline({
            paused: true,
            smoothChildTiming: true,
            defaults: {
              duration: .7,
              ease: 'entrance_expressive'
              }
            })
            .to(contentWindow, { height: windowHeight, opacity: 1 })
  };
};
