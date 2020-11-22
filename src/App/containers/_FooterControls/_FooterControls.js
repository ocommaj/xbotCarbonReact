import React, { useContext, useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Toggle } from 'carbon-components-react';
import { AppContext } from '@App';
import ProfileModal from '@components/ProfileModal';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';
import { useClickOutsideDetector } from '@hooks';

export default function FooterControls({props}) {
  const { staticMaps, bg, setBg } = props;
  const {
    animate,
    showToolTips,
    setShowToolTips,
    activeUser
  } = useContext(AppContext),

  { loginWithRedirect, logout } = useAuth0(),
  [profileModalOpen, setProfileModalOpen] = useState(false),
  [footerOpen, setFooterOpen] = useState(false),
  wrapperRef = useRef(null),

  handleClick = {
    footerToggler: () => setFooterOpen(!footerOpen),
    outsideFooter: () => { if (footerOpen) setFooterOpen(!footerOpen) },
    loginToggler: loginToggler()
  };

  useEffect( () => footerToggler(footerOpen), [footerOpen])
  useClickOutsideDetector(wrapperRef, handleClick.outsideFooter);

  return (
    <>
    <div className="footerControls" ref={wrapperRef}>
      <span className="dashTopButtons">
      <StickyButton
        clickHandler={ handleClick.loginToggler }
        pictogram={ !activeUser ? 'idBadge' : 'userProfile' }
        assistiveText={ !activeUser ? 'Login' : 'Profile' }
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
    <ProfileModal
      user={ activeUser }
      logout={ () => logout({ returnTo: window.location.origin }) }
      profileModalOpen={ profileModalOpen }
      setProfileModalOpen={ setProfileModalOpen }/>
    </>
  )

  function loginToggler() {
     return !activeUser ?
              () => loginWithRedirect() :
              () => setProfileModalOpen(!profileModalOpen);
  }

  function footerToggler(openState) {
     const toggleFooter = animate.footerControls.toggler,
           toggleWindow = animate.contentWindow.heightToggler,
           openFooter = () => toggleWindow(openState, toggleFooter),
           closeFooter = () => toggleFooter(openState, toggleWindow);
     return openState === true ? openFooter() : closeFooter();
   }
}
