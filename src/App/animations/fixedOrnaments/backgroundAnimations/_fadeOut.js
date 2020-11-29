import { gsap } from 'gsap';

export default function fadeOut() {
  const bg = document.querySelector('.mapboxBG');
  const tl = gsap.timeline({ paused: true })
        .to(bg, { opacity: 0, ease: "expressive_exit" });
  return tl;
};
