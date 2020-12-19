import React, {
  useCallback, useEffect, useState, useMemo, useRef } from 'react';
import ContentWindowWrapper, { templates } from '@components/ContentWindow';

const DOM = {
  CARBON_COL: 'bx--col bx--offset-lg-1',
  CARBON_ROW: 'bx--row',
  COLUMN: 'mainContentCol'
};

export default function MainContentRow({ className, animate, activeSection }) {
  const [ nextWindow, setNextWindow ] = useState(null);
  const [ contentWindow, setContentWindow ] = useState(null);
  const rowRef = useRef(null);
  const windowRef = useRef(null);
  const animation = useRef(animate);

  const templateToLoad = useMemo(() => {
      if (!activeSection) return
      const template = templates[activeSection.windowType];
      const props = {
        activeSection,
        animate: animation.current.effects.content,
        timeline: animation.current.timeline
       };
      return template(props)
  }, [activeSection]);

  const loadContentWindow = useCallback(() => {
    if (!nextWindow) return
    const delay = !!windowRef.current ? '+=.3' : 0;
    animation.current.timeline()
      .add(!!delay
          ? animation.current.effects.collapse({ windowRef }).play()
          : null )
      .add(() => setContentWindow(nextWindow), delay)
    }, [nextWindow]);

  const displayContentWindow = useCallback(() => {
    if (contentWindow) {
      animation.current.timeline()
        .add( animation.current.effects.reveal({ rowRef, windowRef }).play() )
    };
  }, [contentWindow]);

  useEffect(() => setNextWindow(templateToLoad), [templateToLoad]);
  useEffect(() => loadContentWindow(), [loadContentWindow]);
  useEffect(() => displayContentWindow(), [displayContentWindow]);

  if (!activeSection) return null;
  return (
    <div className={ `${ DOM.CARBON_ROW } ${ className }` } ref={ rowRef }>
      <div className={ `${ DOM.CARBON_COL } ${ DOM.COLUMN }` }>
        <ContentWindowWrapper content={ contentWindow } ref={ windowRef } />
      </div>
    </div>
  );
};
