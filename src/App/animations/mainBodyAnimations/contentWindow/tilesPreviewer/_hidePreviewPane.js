import { gsap } from 'gsap'

export default function hidePreviewPane(params) {
  const { previewCol, previewPane } = params,
        tl = gsap.timeline({ paused: true })
          .collapsePreviewPane({previewCol, previewPane});

        tl.play()
}
