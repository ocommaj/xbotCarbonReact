import { gsap } from 'gsap'

export default function closeSideDrawer(params) {
  const { drawerRef } = params;
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'exit_expressive' }
        })
          .to(drawerRef.current, { width: 0 });
}
