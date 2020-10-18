import RegisterEffects from './effects'
import MainBodyAnimations from './mainBodyAnimations'
import FixedOrnamentAnimations from './fixedOrnaments'

const Animate = () => {
  const self = {
          header: MainBodyAnimations.header(),
          contentWindow: MainBodyAnimations.contentWindow(),
          footerControls: MainBodyAnimations.footerControls,
          background: FixedOrnamentAnimations.background(),
          fleet: FixedOrnamentAnimations.fleet()
        }

  RegisterEffects()

  return Object.assign(self)
}

export default Animate
