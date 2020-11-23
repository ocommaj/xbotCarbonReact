import React, { useEffect } from 'react';
import { useLocalStorage, useUser } from '@hooks/';
import { sections } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips'),
        activeUser = useUser(),
        contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          animate: Animate(),
          sections: sections()
        };

  useEffect(() => { console.dir(activeUser) }, [activeUser]);

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )
}
