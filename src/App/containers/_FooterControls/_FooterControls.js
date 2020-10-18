import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@App';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';

export default function FooterControls() {
  const { animate, staticMaps, bg, setBg } = useContext(AppContext),
        [menusExpanded, setMenusExpanded] = useState(false);

  useEffect(() => menusExpander(menusExpanded), [menusExpanded])

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

  function menusExpander(openState) {
    const footerControls = document.querySelector('.footerControls')
    animate.contentWindow.heightToggler(openState)
    footerControls.style.width = !openState ? '5rem' : '100vw'
  }

  function clickHandler() {
    setMenusExpanded(!menusExpanded) }
}
