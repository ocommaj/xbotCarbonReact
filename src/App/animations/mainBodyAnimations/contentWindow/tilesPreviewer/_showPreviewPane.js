import { gsap } from 'gsap';

export default function showPreviewPane(params) {
  const { previewCol, previewPane } = params;
  const tl = gsap.timeline({ paused: true })
          .displayPreviewPane({previewCol, previewPane});

  tl.play();
};
