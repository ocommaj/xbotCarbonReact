import React, { useState, useEffect, useRef, useContext } from 'react';
import { PageFirst24 } from '@carbon/icons-react';
import { AppContext } from '@App';

const DOM = {
  WRAPPER: "sideDrawer",
  TOGGLER: "drawerToggler",
  OPEN: "isOpen",
};

export default function SideDrawer() {
  const { animate: {wrapperTimeline, sideDrawerFX} } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const drawerRef = useRef();

  return (
    <div className={ DOM.WRAPPER } ref={ drawerRef }>
      <button
        className={ isOpen ? `${DOM.TOGGLER} ${DOM.OPEN}` : DOM.TOGGLER }
        onClick ={ () => toggleOpen() }>
        <PageFirst24 />
      </button>
    </div>
  );

  function toggleOpen() {
    wrapperTimeline()
      .add( !isOpen
        ? sideDrawerFX.openDrawer({ drawerRef }).play()
        : sideDrawerFX.closeDrawer({ drawerRef }).play()
       )
      .call( setOpen(prevState => !prevState) )
  }
}
