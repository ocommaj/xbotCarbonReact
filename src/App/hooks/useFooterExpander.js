import { useState, useContext } from 'react';
import { AppContext } from '@App';

export default function useFooterExpander() {
  const { animate } = useContext(AppContext),
        [menusExpanded, setMenusExpanded] = useState(false);

  function menuExpander() {
    setMenusExpanded(!menusExpanded)
    footerToggler(!menusExpanded)
    }

  function footerToggler(openState) {
    const toggleFooter = animate.footerControls.toggler,
          toggleWindow = animate.contentWindow.heightToggler,
          openFooter = () => toggleWindow(openState, toggleFooter),
          closeFooter = () => toggleFooter(openState, toggleWindow);

    return openState === true ? openFooter() : closeFooter()
    }

    return menuExpander 
}
