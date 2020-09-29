import { gsap } from 'gsap'

export default function collapseToHide(onComplete) {
  const contentWindow = document.querySelector('.mainContentWindow'),
        tl = gsap.timeline({ paused: true, onComplete: () => onComplete() })
          .to(contentWindow, { height: 0})
          .to(contentWindow.children, {opacity: 0}, '<');
  tl.play()
}
