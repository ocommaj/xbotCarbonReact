import { gsap } from 'gsap'

export default function openSideDrawer(params) {
  const { drawerRef } = params;
  const target = drawerRef.current;
  const children = target.children;
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'entrance_expressive' }
        })
          .to(target, { width: '14rem' })
          .to(children, {
            opacity: 1,
            width: '100%',
            padding: '.25rem' }, '<');

}
