import React from 'react';
import './App.scss';
import Configs from '@Models';
import Animate from '@animations';
import ScreenContents from '@containers';

export const AppContext = React.createContext()

export default function App() {
  const contextValue = {
    animate: Animate(),
    mapbox: Configs.mapbox(),
    sections: Configs.sections() };

  return (
    <AppContext.Provider value={ contextValue }>
      <ScreenContents />
    </AppContext.Provider>
  )
}
