import React, { useContext, useState, useRef, useEffect } from 'react';
import Graphic from '@components/VectorGraphics';
import { AppContext } from '@App';

export default function FleetGraphic(props) {
  const { visibile } = props;
  const { animate } = useContext(AppContext);
  const [helperMsg, setHelperMsg] = useState();
  const fleetGraphicDiv = useRef();
  const fleetGraphicWrapper = useRef();
  const fleetHelperText = useRef();
  const offsets = ['-.5rem', '1rem', '-.75rem', '-2.25rem'];

  useEffect(initAnimation, [animate]);

  if (!visibile.state) return null
  return (
    <div className="fleetGraphic" ref={ fleetGraphicDiv }>
      <span className="fleetGraphicContainer" ref={ fleetGraphicWrapper }>
        {offsets.map((off, i) => { return (
          <Graphic
            key={ `shipGraphic_${i}` }
            pictogram='cargoShip240'
            style={ { marginTop: off } }
            onClick={ () => clickHandler() }
          />
        )})}
      </span>
      <div className="helperText" ref={ fleetHelperText }>
        { helperMsg }
      </div>
    </div>
  )

  function initAnimation() {
    const msgArr = [ "(click to skip ahead)", "(scroll to start)" ];
    const graphics = fleetGraphicWrapper.current.children;
    const element = fleetHelperText.current;

    animate.fleet.loading({ graphics });
    animate.wrapperTimeline({ repeat: -1, repeatDelay: 1.4 })
      .add( animate.fleet.messageFlipper({ element }).play() )
      .call(() => setHelperMsg(prevState => {
        return prevState === msgArr[0] ? msgArr[1] : msgArr[0] }
      ));
  }

  function clickHandler() {
    animate.wrapperTimeline()
      .add( fleetToTiles().play() )
      .eventCallback( () => visibile.setState(prevState => !prevState) )
  }

  function fleetToTiles() {
    const params = {
      fleetContainer: fleetGraphicDiv.current,
      headerTiles: document.querySelectorAll('.bx--tile.headerTile') }

    return animate.fleet.fleetToTiles(params)
  }

}
