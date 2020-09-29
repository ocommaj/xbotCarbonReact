import collapseToHide from './_collapseToHide'
import revealFromHidden from './_revealFromHidden'

const registerAnimations = () => ({
  collapse: (completionHandler) => collapseToHide(completionHandler),
  reveal: (obj) => revealFromHidden(obj)
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
