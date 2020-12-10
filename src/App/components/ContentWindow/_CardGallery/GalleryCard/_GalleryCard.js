import React, { useState } from 'react';
import { Tile } from 'carbon-components-react';
import testImg from "./testPenThumbnail.png";

const DOM = {
  WRAPPER: "galleryCard",
  IMG_WRAPPER: "imgWrapper",
  IMG: "tilePreviewImage",
  LABEL: "cardLabel",
}

export default function GalleryCard(props) {
  return (
    <Tile className={ DOM.WRAPPER }>
      <span className={ DOM.IMG_WRAPPER }>
        <img
          className={ DOM.IMG }
          loading="lazy"
          src={ testImg }
          alt="" />
      </span>
      <span className={ DOM.LABEL }>
        Gallery Card
      </span>
    </Tile>
  )
}
