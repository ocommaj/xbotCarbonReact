import { gsap } from 'gsap';

export default function removeItem(params) {
  const { button } = params;
  const parentItem = button.parentElement;
  const text = parentItem.querySelector('h3') || null;

  const tl = gsap.timeline({
          paused: true,
          defaults: { ease: 'exit_expressive', duration: .4 }
        }).to(button, { opacity: 0 });

  if (!!text) tl.to(text, { visibility: 'collapse' }, '<');
  tl.to(parentItem, { height: 0 }, '<')
    .to(parentItem, { width: 0, opacity: 0 }, '<.1');

  return tl;
}
