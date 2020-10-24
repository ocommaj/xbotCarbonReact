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
            onComplete: () => {
              tile.classList.toggle('activeArticleTile')
              outgoingTile.classList.toggle('activeArticleTile')
              setPreviewArticle()

            }
          })
          .collapsePreviewPane({ previewCol, previewPane })
          .resizeArticlePreviewTiles(
            {tile: outgoingTile, tiles, tilesExpanded})
          .resizeArticlePreviewTiles(
            {tile, tiles, tilesExpanded: false})

    tl.play()

}
