import React, { useState } from 'react';
import { Mapbox } from '@Models';
import FixedOrnaments from '@containers/_FixedOrnaments';
import MainBodyGrid from '@containers/_MainBodyGrid';
import FooterControls from '@containers/_FooterControls';

export default function ScreenContents() {
  const [ staticMaps, randomBG ] = Mapbox();
  const [ bg, setBg ] = useState( randomBG );
  const props = { bg, setBg, staticMaps };

  return (
    <>
      <FixedOrnaments props={ bg }/>
      <div className="TopLevelWrapper">
        <MainBodyGrid />
        <FooterControls props={ props }/>
      </div>
    </>
  )
}
