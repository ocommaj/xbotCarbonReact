import { gsap } from 'gsap';

export default function collapseToHide(onComplete) {
  const contentWindow = document.querySelector('.mainContentWindow');
  const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "exit_expressive" },
          onComplete: () => onComplete()
        })
          .to(contentWindow, { height: 0})
          .to(contentWindow.children, {opacity: 0}, '<');
  tl.play();
};
