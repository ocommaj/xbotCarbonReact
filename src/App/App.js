import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Configs from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ staticMaps, getRandomStaticMap ] = Configs.mapbox(),
        [ bg, setBg ] = useState( getRandomStaticMap() ),
        [ showToolTips, setShowToolTips ] = useState(true),
        { isAuthenticated, user } = useAuth0(),

        contextValue = {
          staticMaps,
          bg,
          setBg,
          showToolTips,
          setShowToolTips,
          isAuthenticated,
          animate: Animate(),
          sections: Configs.sections()
        };

  return (
    <AppContext.Provider value={ contextValue }>
      <ScreenContents />
    </AppContext.Provider>
  )
}
