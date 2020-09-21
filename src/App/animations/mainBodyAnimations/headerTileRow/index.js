import HeaderTileEffects from './headerTileEffects'
import reduceHeaderTileRow from './_reduceHeaderTileRow'
import switchHeaderTiles from './_switchHeaderTiles'

const registerAnimations = () => ({
  reduceTiles: (params) => reduceHeaderTileRow(params),
  switchTiles: (params) => switchHeaderTiles(params)
})

export default function ComposeAnimations() {
  HeaderTileEffects()
  return Object.assign({}, registerAnimations())
}
