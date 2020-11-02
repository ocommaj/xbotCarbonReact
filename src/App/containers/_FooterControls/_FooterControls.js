import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '@App';
import { Toggle } from 'carbon-components-react';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';
import useClickOutsideDetector from '@hooks/useClickOutsideDetector';

export default function FooterControls() {
  const {
    animate,
    staticMaps,
    bg,
    setBg,
    setShowLoginModal,
    showToolTips,
    setShowToolTips
  } = useContext(AppContext),
  [menusExpanded, setMenusExpanded] = useState(false),
  wrapperRef = useRef(null);

  const handleClick = {
    showLoginModal: () => setShowLoginModal(true),
    footerToggler: () => menuToggler(),
    outsideFooter: () => { if (!!menusExpanded) { menuToggler() } }
  }

  useClickOutsideDetector(wrapperRef, handleClick.outsideFooter)

  return (
    <div className="footerControls" ref={wrapperRef}>
      <span className="dashTopButtons">
      <StickyButton
        clickHandler={ handleClick.showLoginModal }
        pictogram={ 'idBadge' }
        assistiveText={ 'Log In' }
        hoverAnimation={ animate.stickyButton.bounceScale }
        showToolTip={ showToolTips } />
      <StickyButton
        clickHandler={ handleClick.footerToggler }
        pictogram={ 'gear' }
        assistiveText={ 'Settings' }
        hoverAnimation={ animate.stickyButton.spinOnZ }
        showToolTip={ showToolTips } />
      </span>
      <span className="controlMenus">
        <Toggle
          id={ 'tooltipToggler' }
          labelText={'Tool Tips'}
          labelA={''}
          labelB={''}
          defaultToggled={ showToolTips }
          onToggle={ () => setShowToolTips(!showToolTips) }
        />
        <BackgroundPicker
          animation={ animate.background.fadeBetweenViews }
          mapConfigs={ staticMaps }
          currentBackground={ bg }
          setBackground={ setBg } />
      </span>
    </div>
  )

  function menuToggler() {
    setMenusExpanded(!menusExpanded)
    footerToggler(!menusExpanded)
  }

  function footerToggler(openState) {
     const toggleFooter = animate.footerControls.toggler,
           toggleWindow = animate.contentWindow.heightToggler,
           openFooter = () => toggleWindow(openState, toggleFooter),
           closeFooter = () => toggleFooter(openState, toggleWindow);

     return openState === true ? openFooter() : closeFooter()
   }
}
