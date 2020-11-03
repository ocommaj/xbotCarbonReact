import React, { useContext, useState, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
    showToolTips,
    setShowToolTips,
    isAuthenticated,
  } = useContext(AppContext),
  { loginWithRedirect, logout } = useAuth0(),
  [menusExpanded, setMenusExpanded] = useState(false),
  wrapperRef = useRef(null),

  handleClick = {
    footerToggler: () => menuToggler(),
    outsideFooter: () => { if (!!menusExpanded) { menuToggler() } },
    loginToggler: setLoginToggler()
  };

  useClickOutsideDetector(wrapperRef, handleClick.outsideFooter)

  return (
    <div className="footerControls" ref={wrapperRef}>
      <span className="dashTopButtons">
      <StickyButton
        clickHandler={ handleClick.loginToggler }
        pictogram={ isAuthenticated === false ? 'idBadge' : 'userProfile' }
        assistiveText={ isAuthenticated === false ? 'login' : 'logout' }
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
          onToggle={ () => setShowToolTips(!showToolTips) } />
        <BackgroundPicker
          animation={ animate.background.fadeBetweenViews }
          mapConfigs={ staticMaps }
          currentBackground={ bg }
          setBackground={ setBg } />
      </span>
    </div>
  )

  function setLoginToggler() {
     return !isAuthenticated ?
              () => loginWithRedirect() :
              () => logout({ returnTo: window.location.origin })
  }

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
