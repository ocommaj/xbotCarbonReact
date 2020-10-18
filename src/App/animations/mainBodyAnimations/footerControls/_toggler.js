import { gsap } from 'gsap'

export default function toggler(respondToState, onComplete) {
  const footerControls = document.querySelector('.footerControls'),
        controlMenus = footerControls.querySelector('.controlMenus'),
        width = respondToState === false  ? '5rem' : '100vw',
        opacity = respondToState === false  ? 0 : 1,
        tl = gsap.timeline({
          paused: true,
          onComplete: () => { if (onComplete) { onComplete(respondToState) } }
         })
          .to(footerControls, {width: width})
          .to(controlMenus, {opacity: opacity}, '<');
  tl.play()
}
