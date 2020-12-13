import React from 'react';
import { Tile } from 'carbon-components-react';
import FitToScreen32 from '@carbon/icons-react/lib/fit-to-screen/32';
import srcData from "./_testSrc";

const DOM = {
  WRAPPER: "galleryCard",
  PREVIEW_IFRAME: "previewIFrame",
  LABEL: "galleryCardLabel",
  SUB_LABEL: "galleryCardLabel__secondary",
  OPEN_ICON: "galleryCardIconButton",
  COVER_LINK: "coverLink"
}

export default function GalleryCard(props) {
  const { clickHandler: launchModal } = props;
  const demo = srcData.template(srcData.html, srcData.css);

  return (
    <Tile className={ DOM.WRAPPER }>
        <iframe
          className={ DOM.PREVIEW_IFRAME }
          loading="lazy"
          sandbox="allow-scripts allow-pointer-lock"
          scrolling="no"
          srcDoc={ demo }
          tabIndex="-1"
          title="CSS Loading Animations"
          frameBorder="0" />
          <button
            className={ DOM.COVER_LINK }
            onClick={ () => launchModal(srcData) }>
            <FitToScreen32 className={ DOM.OPEN_ICON } />
          </button>
      <div className={ DOM.LABEL }>
        Gallery Card
      </div>
      <div className={ DOM.SUB_LABEL }>
        Author's Name
      </div>
    </Tile>
  )
}
