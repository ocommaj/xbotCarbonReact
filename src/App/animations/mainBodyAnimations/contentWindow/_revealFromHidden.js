import { gsap } from 'gsap';

export default function revealFromHidden() {
  const contentRow = document.querySelector('.mainContentRow');
  const contentWindow = contentRow.querySelector('.mainContentWindow');

  if (contentWindow) {
    const padding = window.getComputedStyle(contentRow)
                          .getPropertyValue('padding-top').slice(0,2);
    const height = contentRow.clientHeight - padding*2;
    const tl = gsap.timeline({
            paused: true,
            defaults: {ease: 'entrance_expressive'}})
            .to(contentWindow, {height: height}, '<.4')
            .fromTo(contentWindow.children, {opacity: 0}, {opacity: 1}, '<.2');

    tl.play();
  };
};
