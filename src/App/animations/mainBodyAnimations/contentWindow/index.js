import collapseToHide from './_collapseToHide'
import revealFromHidden from './_revealFromHidden'
import TilesPreviewerAnimations from './tilesPreviewer'

const registerAnimations = () => ({
  collapse: (completionHandler) => collapseToHide(completionHandler),
  reveal: (obj) => revealFromHidden(obj),
  content: {
    tilesPreviewer: () => TilesPreviewerAnimations()
  }

})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
