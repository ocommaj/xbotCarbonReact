import FixedOrnamentAnimations from './fixedOrnaments';
import MainBodyAnimations from './mainBodyAnimations';
import RegisterEffects from './effects';
import WrapperTimeline from './wrapperTimeline';

export default function Animate() {
  const self = {
          wrapperTimeline: (args) => WrapperTimeline(args),
          header: MainBodyAnimations.header,
          contentWindow: MainBodyAnimations.contentWindow,
          footerControls: MainBodyAnimations.footerControls,
          sideDrawerFX: MainBodyAnimations.sideDrawer,
          background: FixedOrnamentAnimations.background,
          fleet: FixedOrnamentAnimations.fleet,
          stickyButton: FixedOrnamentAnimations.stickyButtons
        };

  RegisterEffects();

  return { ...self }
};
