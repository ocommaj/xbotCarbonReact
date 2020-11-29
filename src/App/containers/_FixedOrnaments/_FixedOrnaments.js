import React, { useState } from 'react';
import MapboxBG from '@components/MapboxBG';
import FleetGraphic from './FleetGraphic';

export default function FixedOrnaments({ props }) {
  const bg = props;
  const [fleetShows, setFleetShows] = useState(true);

  return (
    <>
      <MapboxBG imageURL={ bg.satView_url } />
      <FleetGraphic visibile={ {state: fleetShows, setState: setFleetShows} }/>
    </>
  )
}
