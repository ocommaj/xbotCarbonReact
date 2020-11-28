import { gsap } from 'gsap';

export default function fadeBetweenViews({setNewURL, url}) {
  const bg = document.querySelector('.mapboxBG'),
        tl = gsap.timeline({ defaults: {
          duration: .7,
          ease: "cubic-bezier(0.4, 0.14, 0.3, 1)" } })
        .to(bg, { opacity: 0,
                  ease: "expressive_exit",
                  onComplete: () => setNewURL(url) })
        .to(bg, { opacity: 1,
                  ease: "expressive_entrance"
         });
  tl.play();
};
