import React, { useState, useRef, useCallback, useEffect } from 'react';
import ContentWindowWrapper, { templates } from '@components/ContentWindow';

const DOM = { ROW: 'bx--row' };

export default function MainContentRow({ className, animate, activeSection }) {
  const [ nextWindow, setNextWindow ] = useState(null);
  const [ contentWindow, setContentWindow ] = useState(null);
  const rowRef = useRef();
  const windowRef = useRef();
  const timeline = animate.timeline();

  const loadTemplate = useCallback(() => {
      if (!activeSection) return
      const template = templates[activeSection.windowType];
      const props = {
        activeSection,
        animate: animate.effects.content,
        timeline: animate.timeline
       };
      setNextWindow( template(props) );
  }, [animate, setNextWindow, activeSection]);

  const loadContentWindow = useCallback(() => {
    const delay = !!contentWindow ? '+=.3' : '+=0';
    timeline
      .add( !!contentWindow
          ? animate.effects.collapse({ windowRef }).play()
          : null )
      .add(() => setContentWindow(nextWindow), delay)
    }, [nextWindow]);

  const displayContentWindow = useCallback(() => {
    if (contentWindow) {
      timeline
        .add( animate.effects.reveal({ rowRef, windowRef }).play() )

    };
  }, [animate, contentWindow]);

  useEffect(() => loadTemplate(), [loadTemplate]);
  useEffect(() => loadContentWindow(), [loadContentWindow]);
  useEffect(() => displayContentWindow(), [displayContentWindow]);

  if (!activeSection) return null;
  return (
    <div className={ `${ DOM.ROW } ${ className }` } ref={ rowRef }>
      <ContentWindowWrapper content={ contentWindow } ref={ windowRef } />
    </div>
  );
};
