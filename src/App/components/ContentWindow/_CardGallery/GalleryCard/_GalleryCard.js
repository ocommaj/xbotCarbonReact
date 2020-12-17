import React from 'react';
import { Tile } from 'carbon-components-react';
import { ContentView32, Attachment32 } from '@carbon/icons-react/';

const DOM = {
  WRAPPER: "galleryCard",
  PREVIEW_IFRAME: "previewIFrame",
  LABEL: "galleryCardLabel",
  SUB_LABEL: "galleryCardLabel__secondary",
  OPEN_ICON: "galleryCardIconButton",
  COVER_LINK: "coverLink",
  RD_LIST_ICON: "inReadingListIcon"
}

export default function GalleryCard(props) {
  const { srcData, clickHandler: launchModal, inReadingList=false } = props;
  const demo = srcData.template(srcData.html, srcData.css);

  return (
    <Tile className={ DOM.WRAPPER }>
        { !!inReadingList && <Attachment32 className={ DOM.RD_LIST_ICON } /> }
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
            onClick={ () => launchModal( srcData ) }>
            <ContentView32 className={ DOM.OPEN_ICON } />
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
