import RootTimeline from './rootTimeline';
import RegisterEffects from './effects';
import MainBodyAnimations from './mainBodyAnimations';
import FixedOrnamentAnimations from './fixedOrnaments';

const Animate = () => {
  const self = {
          rootTimeline: () => RootTimeline(),
          header: MainBodyAnimations.header,
          contentWindow: MainBodyAnimations.contentWindow,
          footerControls: MainBodyAnimations.footerControls,
          background: FixedOrnamentAnimations.background,
          fleet: FixedOrnamentAnimations.fleet,
          stickyButton: FixedOrnamentAnimations.stickyButtons
        }

  RegisterEffects()

  return Object.assign(self)
}

export default Animate
