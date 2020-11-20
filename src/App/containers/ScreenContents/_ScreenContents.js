import React, { useState } from 'react';
import { mapbox } from '@Models';
import FixedOrnaments from '@containers/_FixedOrnaments';
import MainBodyGrid from '@containers/_MainBodyGrid';
import FooterControls from '@containers/_FooterControls';

export default function ScreenContents() {
  const [ staticMaps, getRandomStaticMap ] = mapbox(),
        [ bg, setBg ] = useState( getRandomStaticMap() );
  const props = { bg, setBg, staticMaps }

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
