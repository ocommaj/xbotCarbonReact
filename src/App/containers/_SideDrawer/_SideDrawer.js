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
};

export default function SideDrawer() {
  const {
    sideDrawerMemos,
    animate: { wrapperTimeline, sideDrawerFX }
  } = useContext(AppContext);
  const [drawerIsOpen, setDrawerOpen] = useState(false);
  const wrapperRef = useRef();
  const drawerRef = useRef();

  const [ codePenModalOpen, setCodePenModalOpen ] = useState(false);
  const [ modalRecord, setModalRecord ] = useState(null);

  useClickOutsideDetector(wrapperRef, () => {
    if (codePenModalOpen || !drawerIsOpen) return
    closeDrawerTimeline(drawerRef)
  });

  if (!sideDrawerMemos.length) return null
  return (
    <>
    <div className={ DOM.WRAPPER } ref={ wrapperRef }>
      <button
        className={ makeClassName(DOM.TOGGLER) }
        onClick ={ () => toggleOpen(drawerRef) }>
        <PageFirst24 />
      </button>
      <div className={ makeClassName(DOM.CONTENT) } ref={ drawerRef }>
        {
          sideDrawerMemos.map(memo => {
            return (
              <DrawerMemo
                key={ `memo_${memo.id}` }
                record={ memo }
                launchModal={ () => launchCodePenModal(memo) }
                />
              )
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

  function makeClassName(baseClass) {
    return !!drawerIsOpen ? `${baseClass} ${DOM.OPEN}` : baseClass
  }

  function toggleOpen(ref) {
    !drawerIsOpen ? openDrawerTimeline(ref) : closeDrawerTimeline(ref)
  }

  function openDrawerTimeline(ref) {
    wrapperTimeline()
      .call( () => setDrawerOpen(prevState => !prevState) )
      .add( sideDrawerFX.openDrawer({ drawerRef: ref }).play() )
  }

  function closeDrawerTimeline(ref) {
    wrapperTimeline()
      .add( sideDrawerFX.closeDrawer({ drawerRef: ref }).play() )
      .then( () => setDrawerOpen(prevState => !prevState) )
  }

  function launchCodePenModal(withSrc) {
    setModalRecord(withSrc);
    setCodePenModalOpen(true);
  }
}
