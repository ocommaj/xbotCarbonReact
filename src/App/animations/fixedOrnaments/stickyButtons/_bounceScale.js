import { gsap } from 'gsap';

export default function bounceScale(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({ paused: true }).bounceScale(graphic);
  tl.play();
}
