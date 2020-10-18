import React, { useContext, useState } from 'react';
import { AppContext } from '@App';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';

export default function FooterControls() {
  const { animate, staticMaps, bg, setBg } = useContext(AppContext),
        [menusExpanded, setMenusExpanded] = useState(false);

  return (
    <div className="footerControls">
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

  function footerToggler(openState) {
    const toggleFooter = animate.footerControls.toggler,
          toggleWindow = animate.contentWindow.heightToggler,
          openFooter = () => { toggleWindow(openState, toggleFooter) },
          closeFooter = () => { toggleFooter(openState, toggleWindow) };

    return openState === true ? openFooter() : closeFooter()
  }

}
