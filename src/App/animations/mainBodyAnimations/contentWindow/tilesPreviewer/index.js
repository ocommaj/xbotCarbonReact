import RegisterEffects from './effects';
import collapsePreviewerTiles from './_collapsePreviewerTiles';
import maximizePreviewPane from './_maximizePreviewPane';
import reducePreviewPane from './_reducePreviewPane';
import switchTiles from './_switchPreviewerTiles';

export default function ComposeAnimations() {
  RegisterEffects();
  return {
    collapseTiles: (params) => collapsePreviewerTiles(params),
    maximizePane: (params) => maximizePreviewPane(params),
    reducePane: (params) => reducePreviewPane(params),
    switchTiles: (params) => switchTiles(params),
  }
}
