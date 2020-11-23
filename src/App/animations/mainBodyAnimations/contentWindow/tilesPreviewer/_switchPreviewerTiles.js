import { gsap } from 'gsap'

export default function switchPreviewerTiles(params) {
  const { tile,
          previewPane,
          previewCol,
          tiles,
          setPreviewArticle,
          tilesExpanded } = params;


    const outgoingTile = document.querySelector('.activeArticleTile'),
          tl = gsap.timeline({
            paused: true,
            onStart: () => {
              outgoingTile.classList.toggle('activeArticleTile')
              tile.classList.toggle('activeArticleTile')
            },
            onComplete: () => setPreviewArticle()
          })
          .collapsePreviewPane({ previewCol, previewPane })
          .resizeArticlePreviewTiles(
            {tile: outgoingTile, tiles, tilesExpanded}, '<.4')
          .resizeArticlePreviewTiles(
            {tile, tiles, tilesExpanded: false})

    tl.play()

}
