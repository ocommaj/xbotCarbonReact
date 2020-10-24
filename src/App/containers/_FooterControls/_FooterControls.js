import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '@App';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';
import useClickOutsideDetector from '@hooks/useClickOutsideDetector';

export default function FooterControls() {
  const { animate, staticMaps, bg, setBg } = useContext(AppContext),
        [menusExpanded, setMenusExpanded] = useState(false),
        wrapperRef = useRef(null);

  useClickOutsideDetector(wrapperRef, handleClickOutside)

  return (
    <div className="footerControls" ref={wrapperRef}>
      <span className="dashTopButtons">
        <StickyButton
          clickHandler={ clickHandler }
          assistiveText={ 'Settings' } />
      </span>
      <span className="controlMenus">
        <BackgroundPicker
          animation={ animate.background.fadeBetweenViews }
          mapConfigs={ staticMaps }
          currentBackground={ bg }
          setBackground={ setBg } />
      </span>
    </div>
  )

  function clickHandler() {
    setMenusExpanded(!menusExpanded)
    footerToggler(!menusExpanded)
   }

   function handleClickOutside() {
     if (menusExpanded === true) { clickHandler() }
   }

   function footerToggler(openState) {
     const toggleFooter = animate.footerControls.toggler,
           toggleWindow = animate.contentWindow.heightToggler,
           openFooter = () => toggleWindow(openState, toggleFooter),
           closeFooter = () => toggleFooter(openState, toggleWindow);

     return openState === true ? openFooter() : closeFooter()
   }
}
