import { gsap } from 'gsap'

export default function switchPreviewerTiles(params) {
  const { tile,
          previewPane,
          previewCol,
          tileCol,
          setPreviewArticle,
          previewShows } = params,
          tiles = tileCol.children,
          outgoingTile = document.querySelector('.activeArticleTile');

  const tl = gsap.timeline({
            paused: true,
            onStart: () => {
              outgoingTile.classList.toggle('activeArticleTile')
              tile.classList.toggle('activeArticleTile')
            },
            onComplete: () => setPreviewArticle()
          })
          .collapsePreviewPane({ previewCol, previewPane })
          .resizeArticlePreviewTiles(
            {tile: outgoingTile, tiles, previewShows}, '<.4')
          .resizeArticlePreviewTiles(
            {tile, tiles, previewShows: false});

    tl.play()

}
