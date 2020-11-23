import { gsap } from 'gsap'

export default function collapsePreviewerTiles(params) {
  const { tile,
          previewCol,
          tileCol,
          tiles,
          setPreviewArticle,
          tilesExpanded } = params,

    tl = gsap.timeline({
          paused: true,
          onStart: () => tile.classList.toggle('activeArticleTile'),
          onComplete: () => {
            previewCol.classList.toggle('previewPaneShows')
            setPreviewArticle()
          }
        })
          .resizeArticlePreviewTiles({tile, tiles, tilesExpanded})
          .set(tileCol, {flexGrow: 0});


  tl.play()
}
