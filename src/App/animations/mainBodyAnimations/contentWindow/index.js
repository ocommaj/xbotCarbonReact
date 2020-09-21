import collapseToHide from './_collapseToHide'
import revealFromHidden from './_revealFromHidden'

const registerAnimations = () => ({
  collapse: (completionHandler) => collapseToHide(completionHandler),
  reveal: () => revealFromHidden()
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
