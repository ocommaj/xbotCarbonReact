import { gsap } from 'gsap'

export default function heightToggler(respondToState, onComplete) {
  const mainWindow = document.querySelector('.mainContentWindow'),
        deltaHeight = respondToState === true ? '-=6rem' : '+=6rem',
          tl = gsap.timeline({
            paused: true,
            onComplete: () => { if (onComplete) { onComplete(respondToState) }}
          });

    if (!!mainWindow) { tl.to(mainWindow, {height: deltaHeight}) };

    tl.play()
  
}
