import React, { useContext } from 'react'
import { AppContext } from '@App'
import MapboxBG from '@components/MapboxBG'
import FleetGraphic from './FleetGraphic'

export default function FixedOrnaments({ props }) {
  const  bg  = props,
        { animate } = useContext(AppContext);

  return (
    <>
      <MapboxBG imageURL={ bg.satView_url } />
      <FleetGraphic animate={ animate.fleet }/>
    </>
  )
}
