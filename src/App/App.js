import React, { useRef } from 'react';
import { useLocalStorage, useUser } from '@hooks/';
import { SectionConfigs } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips'),
        animate = useRef( Animate() ),
        [activeUser, setActiveUser] = useUser(),
        sections = SectionConfigs,
        contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          setActiveUser,
          sections,
          animate: animate.current
        };

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )
}
