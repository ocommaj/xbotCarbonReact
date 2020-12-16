import { gsap } from 'gsap';

export default function removeItem(params) {
  const { button } = params;
  const parentItem = button.parentElement;

  return gsap.timeline({
          paused: true,
          defaults: { ease: 'exit_expressive', duration: .4 }
        })
          .to(button, { opacity: 0 })
          .to(parentItem, { height: 0 }, '<')
          .to(parentItem, { width: 0, opacity: 0 }, '<.1');

}
