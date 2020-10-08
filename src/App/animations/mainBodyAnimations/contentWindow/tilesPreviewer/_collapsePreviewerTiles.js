import { gsap } from 'gsap'

export default function collapsePreviewerTiles(params) {
  const { caller, setPreviewArticle } = params,
        tile = document.getElementById(caller),
        tileCol = document.querySelector('.tilesColumn'),
        previewCol = document.querySelector('.previewColumn'),
        tiles = document.querySelectorAll('.articlePreviewTile'),
        tl = gsap.timeline({
          paused: true,
          onComplete: () => {
            previewCol.classList.toggle('previewArticleSelected')
            setPreviewArticle()
          }
        })
          .resizeArticlePreviewTiles({tile, tiles, tilesExpanded: true})
          .set(tileCol, {flexGrow: 0})
          .set(previewCol, {flexGrow: 1});

  tl.play()
}
