import { gsap } from 'gsap'

export default function closeSideDrawer(params) {
  const { drawerRef } = params;
  const target = drawerRef.current;
  const children = gsap.utils.toArray(target.children);
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'exit_expressive' }
        })
          .to(children, { height: 0 })
          .to(children, { opacity: 0, width: 0, padding: 0 }, '<')
          .to(target, { width: 0 }, '<');
}
