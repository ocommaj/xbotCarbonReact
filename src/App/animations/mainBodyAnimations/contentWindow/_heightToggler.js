import { gsap } from 'gsap'

export default function heightToggler(respondToState) {
  const mainWindow = document.querySelector('.mainContentWindow');

  if (!!mainWindow) {
    const deltaHeight = respondToState === true ? '-=6rem' : '+=6rem',
          tl = gsap.timeline({ paused: true })
            .to(mainWindow, {height: deltaHeight});

    tl.play()
  }
}
