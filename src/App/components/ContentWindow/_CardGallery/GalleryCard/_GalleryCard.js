import React from 'react';
import { Tile } from 'carbon-components-react';
import { ContentView32, Attachment24 } from '@carbon/icons-react/';

const DOM = {
  WRAPPER: "galleryCard",
  PREVIEW_IFRAME: "previewIFrame",
  LABEL: "galleryCardLabel",
  SUB_LABEL: "galleryCardLabel__secondary",
  OPEN_ICON: "galleryCardIconButton",
  COVER_LINK: "coverLink",
  RD_LIST_ICON: "inReadingListIcon",
  DRAG_HANDLE: "dragHandle",
}

export default function GalleryCard(props) {
  const {
    srcData,
    dragHandler,
    isInReadingList=false,
    clickHandler: launchModal } = props;
  const demo = srcData.template(srcData.html, srcData.css);

  return (
    <Tile className={ DOM.WRAPPER } id={ `${srcData._id}_card` }>
      { isInReadingList && <Attachment24 className={ DOM.RD_LIST_ICON } /> }
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
      <div className={ DOM.LABEL } id={ `${srcData._id}_label` }>
        Gallery Card
      </div>
      <div className={ DOM.SUB_LABEL }>
        Author's Name
      </div>
      <div
        draggable={ !isInReadingList }
        className={ DOM.DRAG_HANDLE }
        onDragStart={ startDrag }
        onDragEnd={ dragHandler.end }
        style={ { 'visibility': isInReadingList ? 'hidden' : 'visible' } }
      />
    </Tile>
  )

  function startDrag(event) {
    dragHandler.start(() => {
      const transferString = JSON.stringify(srcData);
      const domElement = document.getElementById(`${srcData._id}_label`);
      domElement.style.zIndex = 2000;
      event.dataTransfer.setDragImage(domElement, 0, 0);
      event.dataTransfer.setData("dragItem", transferString);
      event.dataTransfer.effectAllowed = "link";
    })
  }
}
