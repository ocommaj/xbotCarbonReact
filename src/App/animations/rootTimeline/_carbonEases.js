import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { easings, motion } from '@carbon/motion';

gsap.registerPlugin(CustomEase);

const paths = ['standard', 'entrance', 'exit'];
const styles = ['productive', 'expressive'];

export default function defineCustomEases() {
  //on return, gsap eases will exist for all Carbon 'path_style' combo keys
  for (const ease of __constructCarbonMotionCurves(paths, styles)) {
    CustomEase.create(ease[0], ease[1]);
  };
}

function __constructCarbonMotionCurves(paths, styles) {
  return [].concat(...paths.map(p => styles.map(s => {
     return [ `${p}_${s}`, __getBezierStr(motion(p, s)) ]
    })
  ))
}

function __getBezierStr(string) {
  return string.replace(/[^0-9 \.]+/g, "")
}
