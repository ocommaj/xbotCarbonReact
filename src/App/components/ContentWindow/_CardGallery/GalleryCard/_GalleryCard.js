import React, { useRef } from 'react';
import { Tile } from 'carbon-components-react';
import { ContentView32, Attachment24 } from '@carbon/icons-react/';


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
  const {
    index,
    srcData,
    dragHandler,
    isInReadingList=false,
    clickHandler: launchModal } = props;
  const demo = srcData.template(srcData.html, srcData.css);
  const cardRef = useRef()

  const HandleStyle = {
    height: '20px',
    position: 'absolute',
    left: '.5rem',
    right: '.5rem',
    top: '70%',
    transform: 'translateY(-10px)',
    cursor: 'grab',
    zIndex: 150,
    //backgroundColor: 'blue',
  }

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
        className={ 'Handle' }
        style={ HandleStyle }
        draggable
        onDragStart={ startDrag }
        onDragEnd={ dragHandler.end }
      />
    </Tile>
  )

  function startDrag(event) {
    dragHandler.start(() => {
    const domElement = document.getElementById(`${srcData._id}_label`)
    event.dataTransfer.setDragImage(domElement, 0, 0)
    event.dataTransfer.setData("dragItem", srcData)
    })
  }
}
