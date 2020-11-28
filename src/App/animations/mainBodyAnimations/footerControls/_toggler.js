import { gsap } from 'gsap';

export default function toggler(respondToState, onComplete) {
  const footerControls = document.querySelector('.footerControls');
  const controlMenus = footerControls.querySelector('.controlMenus');
  const width = !respondToState  ? 'auto' : '100vw';
  const opacity = !respondToState ? 0 : 1;
  const tl = gsap.timeline({
          paused: true,
          defaults: {
            ease: !respondToState ? "entrance_expressive" : "exit_expressive"
          },
          onComplete: () => { if (onComplete) { onComplete(respondToState) } }
         })
          .to(footerControls, { width: width })
          .to(controlMenus, { opacity: opacity }, '<');
  tl.play();
};
