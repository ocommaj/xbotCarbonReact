import { gsap } from 'gsap'

export default function collapseToHide(onComplete) {
  const mainContent = document.querySelector('.mainContentWindow'),
        tl = gsap.timeline({ paused: true, onComplete: () => onComplete() })
          .to(mainContent, { height: 0})
          .to(mainContent.children, {opacity: 0}, '<');
  tl.play()
}
