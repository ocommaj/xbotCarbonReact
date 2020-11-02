import React, { useState } from 'react';
import Configs from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ staticMaps, getRandomStaticMap ] = Configs.mapbox(),
        [ bg, setBg ] = useState( getRandomStaticMap() ),
        [ showToolTips, setShowToolTips ] = useState(true),
        contextValue = {
          staticMaps,
          bg,
          setBg,
          showToolTips,
          setShowToolTips,
          animate: Animate(),
          sections: Configs.sections()
        };

  return (
    <AppContext.Provider value={ contextValue }>
      <ScreenContents />
    </AppContext.Provider>
  )
}
