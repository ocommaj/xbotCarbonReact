import React, { useState } from 'react';
import { Tile } from 'carbon-components-react';
import FitToScreen32 from '@carbon/icons-react/lib/fit-to-screen/32';
import testSrc from "./_testSrc";

const DOM = {
  WRAPPER: "galleryCard",
  PREVIEW_IFRAME: "previewIFrame",
  LABEL: "galleryCardLabel",
  SUB_LABEL: "galleryCardLabel__secondary",
  OPEN_ICON: "galleryCardIconButton",
  COVER_LINK: "coverLink"
}

export default function GalleryCard(props) {
  const demo = testSrc()
  return (
    <Tile className={ DOM.WRAPPER }>
        <iframe
          className={ DOM.PREVIEW_IFRAME }
          loading="lazy"
          sandbox="allow-scripts allow-pointer-lock allow-same-origin" scrolling="no"
          srcDoc={ demo }
          tabindex="-1"
          title="CSS Loading Animations"
          frameborder="0" />
          <a className={ DOM.COVER_LINK }>
            <FitToScreen32 className={ DOM.OPEN_ICON } />
          </a>
      <div className={ DOM.LABEL }>
        Gallery Card
      </div>
      <div className={ DOM.SUB_LABEL }>
        Author's Name
      </div>
    </Tile>
  )
}
