import reduceHeaderTileRow from './_reduceHeaderTileRow'
import switchHeaderTiles from './_switchHeaderTiles'
import labelFader from './_labelFader'
import HeaderTileEffects from './headerTileEffects'

const animations = {
  reduceTiles: (params) => reduceHeaderTileRow(params),
  switchTiles: (params) => switchHeaderTiles(params),
  labelFader: (params) => labelFader(params)
}

export default animations
export { HeaderTileEffects }
