import RegisterEffects from './effects';
import collapsePreviewerTiles from './_collapsePreviewerTiles';
import switchTiles from './_switchPreviewerTiles';
import showPreviewPane from './_showPreviewPane';
import hidePreviewPane from './_hidePreviewPane';
import maximizePreviewPane from './_maximizePreviewPane';
import reducePreviewPane from './_reducePreviewPane';

const registerAnimations = () => ({
  collapseTiles: (params) => collapsePreviewerTiles(params),
  switchTiles: (params) => switchTiles(params),
  showPreviewPane: (params) => showPreviewPane(params),
  hidePreviewPane: (params) => hidePreviewPane(params),
  maximizePreviewPane: (params) => {return maximizePreviewPane(params)},
  reducePreviewPane: (params) => {return reducePreviewPane(params)}
})

export default function ComposeAnimations() {
  RegisterEffects()
  return Object.assign({}, registerAnimations())
}
