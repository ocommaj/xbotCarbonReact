import HeaderRowAnimations from './headerTileRow'
import ContentWindowAnimations from './contentWindow'

const registerAnimations = () => ({
  header: HeaderRowAnimations(),
  contentWindow: ContentWindowAnimations()
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
