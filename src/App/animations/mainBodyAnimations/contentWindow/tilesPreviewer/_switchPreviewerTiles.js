import { gsap } from 'gsap';

export default function switchPreviewerTiles(params) {
  const { tile,
          previewPane,
          previewCol,
          tileCol,
          setPreviewArticle,
          previewShows
        } = params;
  const deltaWidth = previewCol.clientWidth;
  const tiles = gsap.utils.toArray(tileCol.children);
  const outgoingTile = document.querySelector('.activeArticleTile');

  const transform = {
    outgoing: {
      idx: tiles.indexOf(outgoingTile),
      delta: `+=${deltaWidth}`
    },
    incoming: {
      idx: tiles.indexOf(tile),
      delta: `-=${deltaWidth}`
    }
  };

  const tl = gsap.timeline({
            paused: true,
            onStart: () => {
              outgoingTile.classList.toggle('activeArticleTile')
              tile.classList.toggle('activeArticleTile')
            },
            //onComplete: () => setPreviewArticle()
          })
          .collapsePreviewPane({ previewCol, previewPane })
          .resizeArticlePreviewTiles({
            tiles, transform: transform.outgoing }, '<.4')
          .resizeArticlePreviewTiles({
            tiles, transform: transform.incoming }, '-=.4')
          .displayPreviewPane({ previewCol, previewPane });

    tl.play();

};
