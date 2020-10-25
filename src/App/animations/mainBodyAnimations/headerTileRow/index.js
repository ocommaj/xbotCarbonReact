import reduceHeaderTileRow from './_reduceHeaderTileRow'
import switchHeaderTiles from './_switchHeaderTiles'
import HeaderTileEffects from './headerTileEffects'

const animations = {
  reduceTiles: (params) => reduceHeaderTileRow(params),
  switchTiles: (params) => switchHeaderTiles(params)
}

export default animations
export { HeaderTileEffects }
