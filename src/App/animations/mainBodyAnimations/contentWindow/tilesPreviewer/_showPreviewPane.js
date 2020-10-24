import { gsap } from 'gsap'

export default function showPreviewPane(params) {
  const { previewCol, previewPane } = params,
        tl = gsap.timeline({
            //delay: 1,
            paused: true
          })
          .displayPreviewPane({previewCol, previewPane});

        tl.play()

}
