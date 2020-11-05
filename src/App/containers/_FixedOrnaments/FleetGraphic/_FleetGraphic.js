import React, { useState, useEffect } from 'react'
import Graphic from '@components/VectorGraphics'

export default function FleetGraphic(props) {
  const { animate } = props,
        [helperMsg, setHelperMsg] = useState(),
        offsets = ['-.5rem', '1rem', '-.75rem', '-2.25rem'];

  useEffect(initAnimation, [animate])

  return (
    <div className="fleetGraphic">
      <span className="fleetGraphicContainer">
        {offsets.map((off, i) => { return (
          <Graphic
            key={ `shipGraphic_${i}` }
            pictogram='cargoShip240'
            style={ { marginTop: off } }
            onClick={ () => fleetToTiles() }
          />
        )})}
      </span>
      <div className="helperText">{ helperMsg }</div>
    </div>
  )

  function initAnimation() {
    const params = {
          graphics: document.querySelector('.fleetGraphicContainer').children,
          inComp: document.querySelector('.helperText'),
          msgArr: [ "(scroll to start)", "(click to skip ahead)" ],
          setState: setHelperMsg
        };

    animate.loading(params)
    animate.messageFlipper(params)

  }

  function fleetToTiles() {
    const params = {
      fleetContainer: document.querySelector('.fleetGraphic'),
      headerTiles: document.querySelectorAll('.bx--tile.headerTile') }

    animate.fleetToTiles(params)
  }
}
