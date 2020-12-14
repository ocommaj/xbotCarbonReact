import React, { useState } from 'react';
import { Mapbox } from '@Models';
import FixedOrnaments from '@containers/_FixedOrnaments';
import FooterControls from '@containers/_FooterControls';
import MainBodyGrid from '@containers/_MainBodyGrid';
import SideDrawer from '@containers/_SideDrawer';


export default function ScreenContents() {
  const { staticMaps, randomBG } = Mapbox();
  const [ bg, setBg ] = useState( randomBG );
  const props = { bg, setBg, staticMaps };

  return (
    <>
      <FixedOrnaments props={ bg }/>
      <MainBodyGrid />
      <FooterControls props={ props }/>
      <SideDrawer />
    </>
  )
}
