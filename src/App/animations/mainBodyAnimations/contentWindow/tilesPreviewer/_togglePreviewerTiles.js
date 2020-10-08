import { gsap } from 'gsap'

export default function togglePreviewerTiles(params) {
  const { caller, setPreviewArticle } = params,
        tile = document.getElementById(caller),
        tileCol = document.querySelector('.tilesColumn'),
        previewCol = document.querySelector('.previewColumn'),
        tiles = document.querySelectorAll('.articlePreviewTile'),
        shouldExpand = previewCol.classList.contains('previewPaneShows'),
        tl = gsap.timeline({
          paused: true,
          onComplete: () => {
            previewCol.classList.toggle('previewPaneShows')
            setPreviewArticle()
          }
        })
          .resizeArticlePreviewTiles({tile, tiles, shouldExpand});

        if (!shouldExpand) {
          tl.set(tileCol, {flexGrow: 0})
          tl.set(previewCol, {flexGrow: 1}) }
        else {
          tl.set(tileCol, {flexGrow: 1})
          tl.set(previewCol, {flexGrow: 0}) }


  tl.play()
}
