import React, { useState, useRef, useContext } from 'react';
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
  openClass( baseClass ) { return `${baseClass} isOpen` }
};

export default function SideDrawer() {
  const {
    sideDrawerMemos,
    animate: { wrapperTimeline, sideDrawerFX }
  } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef();
  const drawerRef = useRef();

  const [ codePenModalOpen, setCodePenModalOpen ] = useState(false);
  const [ modalRecord, setModalRecord ] = useState(null);

  useClickOutsideDetector(wrapperRef, () => closeDrawerTimeline(drawerRef));

  if (!sideDrawerMemos.length) return null
  return (
    <>
    <div className={ DOM.WRAPPER } ref={ wrapperRef }>
      <button
        className={ isOpen ? DOM.openClass(DOM.TOGGLER) : DOM.TOGGLER }
        onClick ={ () => toggleOpen(drawerRef, isOpen) }>
        <PageFirst24 />
      </button>
      <div
        className={ isOpen ? DOM.openClass(DOM.CONTENT) : DOM.CONTENT }
        ref={ drawerRef }>
        {
          sideDrawerMemos.map(memo => {
            return (
              <DrawerMemo
                key={ `memo_${memo.id}` }
                record={ memo }
                launchModal={ () => launchCodePenModal(memo) }
                />)
          })
        }
      </div>
    </div>
    <CodePenModal
      modalState={ {
        isOpen: codePenModalOpen,
        close: () => setCodePenModalOpen(false)
        } }
      srcData={ modalRecord }
    />
    </>
  );

  function toggleOpen(ref, open) {
    !open ? openDrawerTimeline(ref) : closeDrawerTimeline(ref)
  }

  function openDrawerTimeline(ref) {
    wrapperTimeline()
      .call( () => setOpen(prevState => !prevState) )
      .add( sideDrawerFX.openDrawer({ drawerRef: ref }).play() )
  }

  function closeDrawerTimeline(ref) {
    if (!isOpen) return
    wrapperTimeline()
      .add( sideDrawerFX.closeDrawer({ drawerRef: ref }).play() )
      .then( () => setOpen(prevState => !prevState) )
  }

  function launchCodePenModal(withSrc) {
    setModalRecord(withSrc);
    setCodePenModalOpen(true);
  }
}
