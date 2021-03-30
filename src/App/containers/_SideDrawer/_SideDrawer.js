import React, { useContext, useEffect, useRef, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { PageFirst24 } from '@carbon/icons-react';
import { AppContext } from '@App';
import DrawerMemo from '@components/DrawerMemo';
import CodePenModal from '@components/CodePenModal';
import { useClickOutsideDetector } from '@hooks';

const DOM = {
  WRAPPER: "sideDrawer",
  TOGGLER: "drawerToggler",
  CONTENT: "sideDrawerContent",
  OPEN: "isOpen",
};

export default function SideDrawer() {
  const {
    readingList,
    setReadingList,
    sideDrawerOpener,
    animate: { wrapperTimeline, sideDrawerFX }
  } = useContext(AppContext);
  const [drawerIsOpen, setDrawerOpen] = useState(false);
  const wrapperRef = useRef();
  const drawerRef = useRef();

  const [ codePenModalOpen, setCodePenModalOpen ] = useState(false);
  const [ modalRecord, setModalRecord ] = useState(null);

  useClickOutsideDetector(wrapperRef, () => {
    if (codePenModalOpen || !drawerIsOpen) return
    closeDrawerTimeline(drawerRef, () => setDrawerOpen(false))
  });

  useEffect(() => {
    if (!readingList.length) setDrawerOpen(false);
  }, [readingList])

  useEffect(() => {
    if (sideDrawerOpener === "readingListDrawer") {
      openDrawerTimeline(drawerRef, () => setDrawerOpen(true))
     }
    /*if (!sideDrawerOpener && drawerIsOpen) {
      closeDrawerTimeline(drawerRef, () => setDrawerOpen(false))
    }*/
  })

  if (
    !readingList.length &&
    !drawerIsOpen &&
    sideDrawerOpener !== "readingListDrawer"
  ) return null

  return (
    <>
    <div
      className={ makeClassName(DOM.WRAPPER) }
      ref={ wrapperRef }
      onDragOver={ dragOver }
      onDragEnter={ dragEnter }
      onDrop={ addFromDrop }>
      <button
        className={ makeClassName(DOM.TOGGLER) }
        onClick ={ () => {
          toggleOpen(drawerRef, () => setDrawerOpen(prevState => !prevState))
        } }>
        <PageFirst24 />
      </button>
      <div className={ makeClassName(DOM.CONTENT) } ref={ drawerRef }>
        <Droppable droppableId={ "readingListDrawer" }>
          {provided => (
            <div ref={ provided.innerRef } { ...provided.droppableProps }>
              { readingList?.map((item, index) => (
                  <DrawerMemo
                    key={ `memo_${item._id}` }
                    index={ index }
                    record={ item }
                    launchModal={ () => launchCodePenModal(item) }
                    remove={ (button) => removeItem(button, item) }
                  />
                )) }
              { provided.placeholder }
            </div>
          )}
        </Droppable>
      </div>
    </div>
    <CodePenModal
      modalState={ {
        isOpen: codePenModalOpen,
        close: () => setCodePenModalOpen(false)
        } }
      srcData={ modalRecord }
      isInReadingList={ true }
    />
    </>
  );

  function makeClassName(baseClass) {
    return !!drawerIsOpen ? `${baseClass} ${DOM.OPEN}` : baseClass
  }

  function toggleOpen(ref, callback) {
    !drawerIsOpen
      ? openDrawerTimeline(ref, callback)
      : closeDrawerTimeline(ref, callback)
  }

  function openDrawerTimeline(ref, callback) {
    wrapperTimeline()
      .add( sideDrawerFX.openDrawer({ drawerRef: ref }).play() )
      .call( () => callback() )
  }

  function closeDrawerTimeline(ref, callback) {
    wrapperTimeline()
      .add( sideDrawerFX.closeDrawer({ drawerRef: ref }).play() )
      .call( () => callback() )
  }

  function launchCodePenModal(withSrc) {
    setModalRecord(withSrc);
    setCodePenModalOpen(true);
  }

  function removeItem(button, item) {
    wrapperTimeline()
      .add( sideDrawerFX.removeItem({ button }).play() )
      .add(
        !!(readingList.length === 1)
          ? sideDrawerFX.closeDrawer({ drawerRef }).play()
          : null)
      .then( () => removeItemFromList(item) );
  }

  function removeItemFromList(toRemove) {
    setReadingList(prevState => {
      const updatedList = prevState.filter(item => item._id !== toRemove._id);
      return updatedList;
    })
  }

  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "link";
  }

  function dragEnter(event) {
    console.log('firing in dragEnter')
    event.preventDefault();
    event.dataTransfer.dropEffect = "link";
  }

  function addFromDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("dragItem");
    const record = JSON.parse(data);

    setReadingList(prevState => [record, ...prevState]);
  }
}
