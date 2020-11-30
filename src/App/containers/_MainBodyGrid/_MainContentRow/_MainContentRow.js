import React, { useState, useCallback, useEffect } from 'react';
import ContentWindow, { templates } from '@components/ContentWindow';

const DOM = { ROW: 'bx--row' };

export default function MainContentRow({ className, animate, activeSection }) {
  const [ nextWindow, setNextWindow ] = useState(null);
  const [ contentWindow, setContentWindow ] = useState(null);

  const loadTemplate = useCallback(() => {
      if (!activeSection) return
      const template = templates[activeSection.windowType];
      const props = { activeSection, animate: animate.content };
      setNextWindow( template(props) );
  }, [animate, setNextWindow, activeSection]);

  const loadContentWindow = useCallback(() => {
    setContentWindow(prevState => !prevState
       ? nextWindow
       : animate.collapse( () => setContentWindow(nextWindow) )
    );
  }, [animate, nextWindow, setContentWindow]);

  const displayContentWindow = useCallback(() => {
    if (contentWindow) { animate.reveal() };
  }, [animate, contentWindow]);

  useEffect(() => loadTemplate(), [loadTemplate]);
  useEffect(() => loadContentWindow(), [loadContentWindow]);
  useEffect(() => displayContentWindow(), [displayContentWindow]);

  if (!activeSection) return null;
  return (
    <div className={ `${ DOM.ROW } ${ className }` }>
      <ContentWindow content={ contentWindow } />
    </div>
  );
};
