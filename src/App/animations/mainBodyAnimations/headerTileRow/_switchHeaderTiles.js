import { gsap } from 'gsap'

export default function switchActiveHeaderTiles(params) {
  const {caller: clickedTile, setActiveId} = params,
        outgoingTile = document.querySelector('.headerTile.activeSection'),
        tl = gsap.timeline({
          paused: true,
          onComplete: () => { setActiveId(clickedTile.id) }
        })
          .toggleActiveTile(outgoingTile)
          .toggleActiveTile(clickedTile, '<');

        if (outgoingTile === clickedTile) { return }

        tl.play()

}
