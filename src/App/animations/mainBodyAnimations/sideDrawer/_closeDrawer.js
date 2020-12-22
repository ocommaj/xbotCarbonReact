import { gsap } from 'gsap'

export default function closeSideDrawer(params) {
  const { drawerRef } = params;
  const target = drawerRef.current;
  const children = gsap.utils.toArray(target.firstChild.children) || null;
  const tl = gsap.timeline({
          paused: true,
          defaults: { ease: 'exit_expressive' }
        })
  if (children) {
    tl.to(children, { opacity: 0, width: 0, padding: 0 }, '<');
  }

  tl.to(target, { width: 0, padding: 0 }, '<');

  return tl;
}
