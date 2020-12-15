import React, { useState, useRef } from 'react';
import { useLocalStorage, useUser } from '@hooks/';
import { SectionConfigs } from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';
import './App.scss';

export const AppContext = React.createContext();

export default function App() {
  const [ showToolTips, setShowToolTips ] = useLocalStorage('showToolTips');
  const [ sideDrawerMemos, setSideDrawerMemos ] = useState([])
  const animate = useRef( Animate() );
  const activeUser = useUser();
  const sections = SectionConfigs;
  const contextValue = {
          showToolTips,
          setShowToolTips,
          activeUser,
          sections,
          sideDrawerMemos,
          setSideDrawerMemos,
          animate: animate.current,
        };

  return (
      <AppContext.Provider value={ contextValue }>
        <ScreenContents />
      </AppContext.Provider>
  );
};
