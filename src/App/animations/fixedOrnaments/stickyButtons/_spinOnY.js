import { gsap } from 'gsap';

export default function spinOnY(element) {
  const graphic = element.querySelector('.pictogramWrapper'),
        tl = gsap.timeline({ paused: true }).spinGraphicY(graphic);
  tl.play();
}
