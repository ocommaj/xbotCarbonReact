import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocalStorage, useLoggedInUserRecord } from '@hooks/';
import { sections, UserRecord } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const { isAuthenticated, user: authUser } = useAuth0(),
        [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips'),
        [ login, loginError ] = useLoggedInUserRecord(),
        [ activeUser, setActiveUser ] = useState(),
        contextValue = {
          showToolTips,
          setShowToolTips,
          authUser,
          isAuthenticated,
          animate: Animate(),
          sections: sections()
        };

  useEffect(() => {
    if (authUser) {
      const input = UserRecord.apolloRequestReducer(authUser)
      login({ variables: { input } })
        .then(({ data }) => {
          const apolloResponse = data.loginUser.loggedInUser;
          const record = UserRecord.apolloResponseReducer(apolloResponse);
          setActiveUser( new UserRecord(record) )
        })
        .catch((error) => console.log('errory!'))
    } else { console.log('no one logged in')}
  }, [authUser])

  useEffect(() => { console.dir(activeUser) }, [activeUser])

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )

}
