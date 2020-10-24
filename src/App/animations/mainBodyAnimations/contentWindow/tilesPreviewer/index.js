import RegisterEffects from './effects'
import collapsePreviewerTiles from './_collapsePreviewerTiles'
import switchTiles from './_switchPreviewerTiles'
import showPreviewPane from './_showPreviewPane'
import hidePreviewPane from './_hidePreviewPane'

const registerAnimations = () => ({
  collapseTiles: (params) => collapsePreviewerTiles(params),
  switchTiles: (params) => switchTiles(params),
  showPreviewPane: (params) => showPreviewPane(params),
  hidePreviewPane: (params) => hidePreviewPane(params)
})

export default function ComposeAnimations() {
  RegisterEffects()
  return Object.assign({}, registerAnimations())
}
