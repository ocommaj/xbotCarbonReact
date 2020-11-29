import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'carbon-components-react';

export default function BackgroundPicker(props) {
  const {
    animate,
    mapConfigs,
    background,
  } = props;

  const [currentItem, setCurrentItem] = useState( background.current );
  const prevItem = useRef();
  const satelliteViewItems = mapConfigs.map(conf => ({
            label: conf.label,
            satView_url: conf.satView_url
        }));

  useEffect(() => {
    if (!prevItem.current || prevItem.current === currentItem) return
    animate.timeline()
      .add( animate.effects.fadeOut().play() )
      .call( () => background.set(currentItem) )
      .then( () => prevItem.current = currentItem )
  }, [animate, background, currentItem]);

  return (
    <Dropdown
      className="backgroundPicker"
      arialabel="Change Background"
      id="backgroundPicker"
      titleText="Satellite view"
      direction="top"
      items={ satelliteViewItems }
      itemToString={(item) => (item ? item.label : '')}
      onChange={({ selectedItem }) => {
        if (selectedItem.label === currentItem.label) return;
        if (!prevItem.current) prevItem.current = 'init';
        setCurrentItem(selectedItem);
      } }
      selectedItem={ currentItem }
      label={ currentItem.label }
    />
  );
}
