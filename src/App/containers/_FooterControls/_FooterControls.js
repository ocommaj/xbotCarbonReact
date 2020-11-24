import React, {
  useContext, useState, useRef, useCallback, useEffect } from 'react';
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
  { loginWithRedirect: redirectLogin, logout } = useAuth0(),
  [profileModalOpen, setProfileModalOpen] = useState(false),
  [footerOpen, setFooterOpen] = useState(false),
  wrapperRef = useRef(null);

  const toggleFooter = useCallback(() => {
    const toggleFooter = animate.footerControls.toggler,
          toggleWindow = animate.contentWindow.heightToggler,
          openFooter = () => toggleWindow(footerOpen, toggleFooter),
          closeFooter = () => toggleFooter(footerOpen, toggleWindow);
   return footerOpen === true ? openFooter() : closeFooter();
  }, [animate, footerOpen]);

  const toggleLogin = useCallback(() => {
    return !activeUser
      ? () => redirectLogin()
      : () => setProfileModalOpen(o => !o)
    }, [activeUser, redirectLogin, setProfileModalOpen]);

  const handleClick = {
    footerToggler: () => setFooterOpen(o => !o),
    outsideFooter: () => !!footerOpen ? setFooterOpen(!footerOpen) : null,
    loginToggler: toggleLogin()
  };

  useEffect(() => toggleFooter(), [toggleFooter]);
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
          onToggle={ () => setShowToolTips(state => !state) } />
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
}
