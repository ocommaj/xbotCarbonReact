import { gsap } from 'gsap';

export default function WrapperTimeline(args={}) {
  return gsap.timeline({
    repeat: args.repeat || 0,
    repeatDelay: args.repeatDelay || 0,
    defaults: {
      duration: args.defaultDuration || .7,
      ease: args.defaultEase || "standard_productive",
    }
  });
};
