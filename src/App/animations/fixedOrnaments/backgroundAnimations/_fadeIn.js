import { gsap } from 'gsap';

export default function fadeIn() {
  const bg = document.querySelector('.mapboxBG');
  const tl = gsap.timeline({ paused: true })
        .to(bg, { opacity: 1, ease: "expressive_entrance" });
  return tl;
};
