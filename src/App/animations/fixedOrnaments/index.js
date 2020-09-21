import BackgroundAnimations from './backgroundAnimations'
import FleetAnimations from './fleetAnimations'

const registerAnimations = () => ({
  background: () => Object.assign( BackgroundAnimations() ),
  fleet: () => Object.assign( FleetAnimations() )
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
