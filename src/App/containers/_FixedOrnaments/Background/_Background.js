import React, { useState } from 'react'
import BackgroundPicker from '@components/BackgroundPicker'
import MapboxBG from '@components/MapboxBG'

export default function Background(props) {
  const { animate, mapboxConfig } = props,
        initBg = mapboxConfig.getRandom(),
        [currentBackground, setCurrentBackground] = useState(initBg)

  return (
    <>
      <BackgroundPicker
        animation={ animate.fadeBetweenViews }
        mapConfigs={ mapboxConfig.staticLocations }
        currentBackground={ currentBackground }
        updateBackgroundImage={ setCurrentBackground }/>
      <MapboxBG imageURL={ currentBackground.satView_url }/>
    </>
  )
}
