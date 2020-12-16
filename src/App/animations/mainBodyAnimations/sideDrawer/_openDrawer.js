import { gsap } from 'gsap'

export default function openSideDrawer(params) {
  const { drawerRef } = params;
  const target = drawerRef.current;
  const children = gsap.utils.toArray(target.children);
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'entrance_expressive', stagger: .1 }
        })
          .to(target, { width: '14rem', padding: '0 .5rem' })
          .to(children, {
            opacity: 1,
            width: '100%',
            padding: '.25rem',
           }, '<')
          .to(children, { height: '8rem' }, '<.2');

}
