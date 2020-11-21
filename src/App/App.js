import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocalStorage, useLoggedInUserRecord } from '@hooks/';
import { sections, UserRecord } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const { user: authUser, logout } = useAuth0(),
        [ activeUser, setActiveUser ] = useState(null),
        [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips'),
        [ login ] = useLoggedInUserRecord(),
        contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          animate: Animate(),
          sections: sections()
        };

  useEffect(() => {
    if (authUser) {
      const apolloHook = { login, errorCallback: logout };
      const user = UserRecord.loginUser(authUser, apolloHook);
      setActiveUser(user);
    }
  }, [authUser])

  useEffect(() => { console.dir(activeUser) }, [activeUser])

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )

}
