import { gsap } from 'gsap'

export default function collapsePreviewerTiles(params) {
  const { tile,
          previewCol,
          tileCol,
          setPreviewArticle,
          previewShows } = params,
          tiles = tileCol.children;

  const tl = gsap.timeline({
          paused: true,
          onStart: () => tile.classList.toggle('activeArticleTile'),
          onComplete: () => {
            previewCol.classList.toggle('visible')
            setPreviewArticle()
          }
        })
          .resizeArticlePreviewTiles({tile, tiles, previewShows})
          .set(tileCol, {flexGrow: 0});


  tl.play()
}
