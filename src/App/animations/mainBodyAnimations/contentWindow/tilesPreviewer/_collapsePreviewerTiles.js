import { gsap } from 'gsap'

export default function collapsePreviewerTiles(params) {
  const { tile,
          previewPane,
          previewCol,
          tileCol,
          tiles,
          setPreviewArticle,
          tilesExpanded } = params,

    tl = gsap.timeline({
          paused: true,
          onComplete: () => {
            previewCol.classList.toggle('previewPaneShows')
            tile.classList.toggle('activeArticleTile')
            setPreviewArticle()
          }
        })
          .resizeArticlePreviewTiles({tile, tiles, tilesExpanded})
          .set(tileCol, {flexGrow: 0});


  tl.play()
}
