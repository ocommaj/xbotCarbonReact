import React from 'react';
import FixedOrnaments from '@containers/_FixedOrnaments';
import MainBodyGrid from '@containers/_MainBodyGrid';
import FooterControls from '@containers/_FooterControls';
import ProfileModal from '@components/ProfileModal';

export default function ScreenContents() {
  return (
    <>
      <FixedOrnaments />
      <div className="TopLevelWrapper">
        <MainBodyGrid />
        <FooterControls />
      </div>
    </>
  )
}
