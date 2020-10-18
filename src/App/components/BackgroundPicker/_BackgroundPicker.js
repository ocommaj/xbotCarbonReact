import React, { useState, useEffect } from 'react'
import { Dropdown } from 'carbon-components-react'

export default function BackgroundPicker(props) {
  const {
    animation,
    mapConfigs,
    currentBackground,
    setBackground
  } = props

  const [currentItem, setCurrentItem] = useState(currentBackground),
        satelliteViewItems = mapConfigs.map(conf => {
          return {
            label: conf.label,
            satView_url: conf.satView_url  }
        });

  useEffect(() => {
    const params = { setNewURL: setCurrentItem, url: currentItem }
    animation(params)

  }, [currentItem])

  return (
    <Dropdown
      className="backgroundPicker"
      arialabel="Change Background"
      id="backgroundPicker"
      titleText="Satellite view"
      direction="top"
      items={ satelliteViewItems }
      itemToString={(item) => (item ? item.label : '')}
      onChange={({ selectedItem }) => setCurrentItem(selectedItem)}
      selectedItem={ currentItem }
      label={ currentItem.label }
    />
  )
}
