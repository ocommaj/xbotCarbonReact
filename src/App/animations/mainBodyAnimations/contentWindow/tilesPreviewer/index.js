import RegisterEffects from './effects'
import collapsePreviewerTiles from './_collapsePreviewerTiles'
import switchTiles from './_switchPreviewerTiles'
import toggleTiles from './_togglePreviewerTiles'

const registerAnimations = () => ({
  collapseTiles: (params) => collapsePreviewerTiles(params),
  switchTiles: (params) => switchTiles(params),
  toggleTiles: (params) => toggleTiles(params)
})

export default function ComposeAnimations() {
  RegisterEffects()
  return Object.assign({}, registerAnimations())
}
