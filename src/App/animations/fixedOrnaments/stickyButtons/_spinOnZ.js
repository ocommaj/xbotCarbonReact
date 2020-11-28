import { gsap } from 'gsap';

export default function spinOnZ(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({ paused: true }).spinGraphicZ(graphic);
  tl.play();
}
