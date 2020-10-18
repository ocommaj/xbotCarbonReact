import React, { useContext } from 'react';
import { AppContext } from '@App';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';

export default function FooterControls() {
  const { animate, staticMaps, bg, setBg } = useContext(AppContext);

  return (
    <div className="footerControls">
      <span className="dashTopButtons">
        <StickyButton />
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
}
