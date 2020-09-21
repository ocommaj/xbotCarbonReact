import React, { useContext } from 'react'
import { AppContext } from '@App'
import Background from './Background'
import FleetGraphic from './FleetGraphic'

export default function FixedOrnaments() {
  const { animate, mapbox } = useContext(AppContext),
        bgAnimations = animate.fixedOrnaments.background(),
        fleetAnimations = animate.fixedOrnaments.fleet();

  return (
    <>
      <Background animate={ bgAnimations } mapboxConfig={ mapbox } />
      <FleetGraphic animate={ fleetAnimations }/>
    </>
  )
}
