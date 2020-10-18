import collapseToHide from './_collapseToHide';
import revealFromHidden from './_revealFromHidden';
import heightToggler from './_heightToggler';
import TilesPreviewerAnimations from './tilesPreviewer';

const registerAnimations = () => ({
  collapse: (completionHandler) => collapseToHide(completionHandler),
  reveal: (obj) => revealFromHidden(obj),
  heightToggler: (respondToState) => heightToggler(respondToState),
  content: {
    tilesPreviewer: () => TilesPreviewerAnimations()
  }

})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
