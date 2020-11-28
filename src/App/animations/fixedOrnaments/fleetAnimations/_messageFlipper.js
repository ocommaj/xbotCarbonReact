import { gsap } from 'gsap'

export default function messageFlipper({ element }) {
    return gsap.timeline({paused: true}).fadeFlip({ element });
}
