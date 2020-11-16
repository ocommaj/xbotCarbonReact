import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useLocalStorage from '@hooks/useLocalStorage';
import Configs from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ staticMaps, getRandomStaticMap ] = Configs.mapbox(),
        [ bg, setBg ] = useState( getRandomStaticMap() ),
        { isAuthenticated, user } = useAuth0(),
        [ showToolTips, setShowToolTips ] = useLocalStorage(
          'xbot-settings-', 'showToolTips', true),

        contextValue = {
          staticMaps,
          bg,
          setBg,
          showToolTips,
          setShowToolTips,
          user,
          isAuthenticated,
          animate: Animate(),
          sections: Configs.sections()
        };

  useEffect(() => {
    if (user) {
      console.log(user)
    } else { console.log('no one logged in')}
  }, [user])

  return (
    <AppContext.Provider value={ contextValue }>
      <ScreenContents />
    </AppContext.Provider>
  )
}
