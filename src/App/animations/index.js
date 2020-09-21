import RegisterEffects from './effects'
import MainBodyAnimations from './mainBodyAnimations'
import FixedOrnamentAnimations from './fixedOrnaments'

const Animate = () => {
  const self = {
    mainBody: MainBodyAnimations(),
    fixedOrnaments: FixedOrnamentAnimations()
  }

  RegisterEffects()
  
  return Object.assign(self)
}

export default Animate
