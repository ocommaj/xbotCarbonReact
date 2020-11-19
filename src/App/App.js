import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, gql } from '@apollo/client';
import useLocalStorage from '@hooks/useLocalStorage';
import useLoggedInUserRecord from '@hooks/useLoggedInUserRecord';
import { mapbox, sections } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ staticMaps, getRandomStaticMap ] = mapbox(),
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
          sections: sections()
        };

  useEffect(() => {
    if (user) {
      console.log(user)
      console.log(user.email)
      console.log(user.email_verified)
    } else { console.log('no one logged in')}
  }, [user])

  useLoggedInUserRecord(user)

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )

}
