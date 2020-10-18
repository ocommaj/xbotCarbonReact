import React, { useState, useEffect } from 'react'
import Graphic from '@components/VectorGraphics'

export default function FleetGraphic(props) {
  const { animate } = props,
        [helperMsg, setHelperMsg] = useState(),
        offsets = ['-.5rem', '1rem', '-.75rem', '-2.25rem'],
        helperMessages = [
          "(scroll to start)",
          "(click to skip ahead)"
        ];

  useEffect(() => {
    const params = {
          graphics: document.querySelector('.fleetGraphicContainer').children
    }

    animate.loading(params)
  }, [])

  useEffect(() => {
    const params = {
          inComp: document.querySelector('.helperText'),
          msgArr: helperMessages,
          setState: setHelperMsg };

    animate.messageFlipper(params)
  }, [])

  return (
    <div className="fleetGraphic">
      <span className="fleetGraphicContainer">
        {offsets.map((off, i) => { return (
          <Graphic
            key={i}
            pictogram='cargoShip240'
            style={ {marginTop: off} }
            onClick={() => {
              const params = {
                fleetContainer: document.querySelector('.fleetGraphic'),
                headerTiles: document.querySelectorAll('.bx--tile.headerTile')}

              animate.fleetToTiles(params)
            }}
          />
        )})}
      </span>
      <div className="helperText">{ helperMsg }</div>
    </div>
  )
}
