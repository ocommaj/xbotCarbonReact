import fleetLoading from './_fleetLoading'
import messageFlipper from './_messageFlipper'
import fleetToTiles from './_fleetToTiles'

const registerAnimations = () => ({
  loading: (params) => fleetLoading(params),
  messageFlipper: (params) => messageFlipper(params),
  fleetToTiles: (params) => fleetToTiles(params)
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
