import { gsap } from 'gsap'

export default function revealFromHidden() {
  const contentRow = document.querySelector('.mainContentRow'),
        contentWindow = contentRow.querySelector('.mainContentWindow'),
        padding = window.getComputedStyle(contentRow)
                        .getPropertyValue('padding-top').slice(0,2),
        height = contentRow.clientHeight - padding*2,
        tl = gsap.timeline({ paused: true})
          .to(contentWindow, {height: height}, '<.4')
          .fromTo(contentWindow.children, {opacity: 0}, {opacity: 1}, '<.2');

  tl.play()
}
