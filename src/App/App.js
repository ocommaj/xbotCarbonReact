import React, { useRef, useEffect } from 'react';
import { useLocalStorage, useUser } from '@hooks/';
import { SectionConfigs } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext();

export default function App() {
  const [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips');
  const animate = useRef( Animate() );
  const activeUser = useUser();
  const sections = SectionConfigs;
  const contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          sections,
          animate: animate.current,
        };

  useEffect(() => console.dir(activeUser), [activeUser])

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  );
};
