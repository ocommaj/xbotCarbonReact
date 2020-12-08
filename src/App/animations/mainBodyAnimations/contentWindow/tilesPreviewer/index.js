import RegisterEffects from './effects';
import collapsePreviewerTiles from './_collapsePreviewerTiles';
import switchTiles from './_switchPreviewerTiles';
import showPreviewPane from './_showPreviewPane';
import hidePreviewPane from './_hidePreviewPane';
import maximizePreviewPane from './_maximizePreviewPane';
import reducePreviewPane from './_reducePreviewPane';

export default function ComposeAnimations() {
  RegisterEffects();
  return {
    collapseTiles: (params) => collapsePreviewerTiles(params),
    switchTiles: (params) => switchTiles(params),
    showPreviewPane: (params) => showPreviewPane(params),
    hidePreviewPane: (params) => hidePreviewPane(params),
    maximizePane: (params) => maximizePreviewPane(params),
    reducePane: (params) => reducePreviewPane(params),
  }
}
