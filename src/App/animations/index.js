import RegisterEffects from './effects'
import MainBodyAnimations from './mainBodyAnimations'
import FixedOrnamentAnimations from './fixedOrnaments'

const Animate = () => {
  const mainBody = MainBodyAnimations(),
        fixedOrnaments = FixedOrnamentAnimations(),
        background = fixedOrnaments.background(),
        self = {
          mainBody,
          fixedOrnaments,
          background
        }

  RegisterEffects()

  return Object.assign(self)
}

export default Animate
