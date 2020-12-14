import { gsap } from 'gsap'

export default function openSideDrawer(params) {
  const { drawerRef } = params;
  return gsap.timeline({
          paused: true,
          defaults: { ease: 'entrance_expressive' }
        })
          .to(drawerRef.current, { width: '15vw' });

}
