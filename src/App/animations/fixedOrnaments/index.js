import BackgroundAnimations from './backgroundAnimations'
import FleetAnimations from './fleetAnimations'

const animations = {
  background: () => BackgroundAnimations(),
  fleet: () => FleetAnimations()
}

export default animations
