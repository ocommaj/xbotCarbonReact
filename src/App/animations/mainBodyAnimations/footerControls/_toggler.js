import { gsap } from 'gsap'

export default function toggler(respondToState, onComplete) {
  const footerControls = document.querySelector('.footerControls'),
        controlMenus = footerControls.querySelector('.controlMenus'),
        width = !respondToState  ? 'auto' : '100vw',
        opacity = !respondToState ? 0 : 1,
        tl = gsap.timeline({
          paused: true,
          defaults: {
            ease: !respondToState ? "entrance_expressive" : "exit_expressive"
          },
          onComplete: () => { if (onComplete) { onComplete(respondToState) } }
         })
          .to(footerControls, {width: width})
          .to(controlMenus, {opacity: opacity}, '<');
  tl.play()
}
