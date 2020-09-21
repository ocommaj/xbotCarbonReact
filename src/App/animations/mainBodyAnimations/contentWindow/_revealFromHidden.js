import { gsap } from 'gsap'

export default function revealFromHidden() {
  const mainContent = document.querySelector('.mainContentWindow'),
        tl = gsap.timeline({ paused: true})
          .to(mainContent, {height: "100%"}, '<.4')
          .fromTo(mainContent.children, {opacity: 0}, {opacity: 1}, '<.2');

  tl.play()
}
