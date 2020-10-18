import toggler from './_toggler'

const animations = {
  'key': () => console.log('footerControls.key'),
  'toggler': (state, onComplete) => toggler(state, onComplete)
}

export default animations
