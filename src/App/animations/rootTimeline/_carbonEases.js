import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { easings, motion } from '@carbon/motion';

gsap.registerPlugin(CustomEase);

const paths = ['standard', 'entrance', 'exit'];
const styles = ['productive', 'expressive'];

export default function defineCustomEases() {
  //on return, gsap eases will exist for all Carbon 'path_style' combo keys
  for (const {name, ease} of __constructCarbonMotionCurves(paths, styles)) {
    CustomEase.create(name, ease);
  };
}

function __constructCarbonMotionCurves(paths, styles) {
  return [].concat( ...paths.map(path => styles.map(style =>
    ({ name: `${path}_${style}`, ease: __getBezierStr( motion(path, style) ) })
  )))
}

function __getBezierStr(string) {
  return string.replace(/[^0-9 \.]+/g, "")
}
