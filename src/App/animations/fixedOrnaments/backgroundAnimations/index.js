import fadeBetweenViews from './_backgroundFader'

const registerAnimations = () => ({
  fadeBetweenViews: (params) => fadeBetweenViews(params)
})

export default function ComposeAnimations() {
  return Object.assign({}, registerAnimations())
}
