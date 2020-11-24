import React, { useRef, useEffect } from 'react';
import { useLocalStorage, useUser } from '@hooks/';
import { SectionConfigs } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext()

export default function App() {
  const [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips'),
        animate = useRef( Animate() ),
        activeUser = useUser(),
        sections = SectionConfigs,
        contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          sections,
          animate: animate.current
        };

  const renderCount = useRef(1);
  useEffect(() => {
    console.log(`App rendered ${renderCount.current} time(s)`)
    renderCount.current = renderCount.current + 1
  })

  useEffect(() => { console.dir(activeUser) }, [activeUser]);

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  )
}
