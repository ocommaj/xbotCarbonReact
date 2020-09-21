import { gsap } from 'gsap'

export default function messageFlipper({inComp, msgArr, setState}) {
  let switchCounter = 0,
      switchTextOnRepeat = () => {
        const idx = switchCounter % msgArr.length
        setState(msgArr[idx])
        switchCounter++
      },

      tl = gsap.timeline()
        .textFlip({inComp, switchTextOnRepeat});

    return tl
}
