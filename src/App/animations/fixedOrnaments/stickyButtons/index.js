import bounceScale from './_bounceScale';
import spinOnX from './_spinOnX';
import spinOnY from './_spinOnX';
import spinOnZ from './_spinOnZ';

const animations = {
  bounceScale: (element) => bounceScale(element),
  spinOnX: (element) => spinOnX(element),
  spinOnY: (element) => spinOnY(element),
  spinOnZ: (element) => spinOnZ(element)
}

export default animations
