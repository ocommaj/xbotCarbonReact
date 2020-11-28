import { gsap } from 'gsap';

export default function spinOnX(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({ paused: true }).spinGraphicX(graphic);
  tl.play();
}
