import React, { useContext } from 'react'
import { AppContext } from '@App'
import MapboxBG from '@components/MapboxBG'
import FleetGraphic from './FleetGraphic'

export default function FixedOrnaments() {
  const { animate, bg, setBg } = useContext(AppContext);

  return (
    <>
      <MapboxBG imageURL={ bg.satView_url } />
      <FleetGraphic animate={ animate.fleet }/>
    </>
  )
}
