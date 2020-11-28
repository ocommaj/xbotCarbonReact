import WrapperTimeline from './wrapperTimeline';
import RegisterEffects from './effects';
import MainBodyAnimations from './mainBodyAnimations';
import FixedOrnamentAnimations from './fixedOrnaments';

export default function Animate() {
  const self = {
          wrapperTimeline: (args) => WrapperTimeline(args),
          header: MainBodyAnimations.header,
          contentWindow: MainBodyAnimations.contentWindow,
          footerControls: MainBodyAnimations.footerControls,
          background: FixedOrnamentAnimations.background,
          fleet: FixedOrnamentAnimations.fleet,
          stickyButton: FixedOrnamentAnimations.stickyButtons
        };

  RegisterEffects();

  return Object.assign(self);
};
