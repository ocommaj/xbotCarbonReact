import React, { useContext } from 'react';
import { AppContext } from '@App';
import StickyButton from '@components/StickyButton';
import BackgroundPicker from '@components/BackgroundPicker';

export default function FooterControlsRow() {
  const { animate, staticMaps, bg, setBg } = useContext(AppContext);

  return (
    <div className="bx--row footerControlsRow">
      <StickyButton />
      <BackgroundPicker
        animation={ animate.background.fadeBetweenViews }
        mapConfigs={ staticMaps }
        currentBackground={ bg }
        updateBackgroundImage={ setBg } />
    </div>
  )
}
