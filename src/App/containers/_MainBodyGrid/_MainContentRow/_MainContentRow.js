import React, { useState, useRef, useCallback, useEffect } from 'react';
import ContentWindow, { templates } from '@components/ContentWindow';

export default function MainContentRow(props) {
  const { animate, activeSection } = props,
        [ nextWindow, setNextWindow ] = useState(null),
        [ contentWindow, setContentWindow ] = useState(null);

  const loadTemplate = useCallback(() => {
      if (!activeSection) return

      const template = templates[activeSection.windowType];
      setNextWindow( template({
              'animate': animate.content,
              'mainId': activeSection.mainId,
              'title': activeSection.defaultStr,
              'tabs': activeSection.options.tabs,
            })
          );
  }, [animate, setNextWindow, activeSection])

  const loadContentWindow = useCallback(() => {
    setContentWindow(prevState => !prevState
       ? nextWindow
       : animate.collapse( () => setContentWindow(nextWindow) )
    )
  }, [animate, nextWindow, setContentWindow])

  const displayContentWindow = useCallback(() => {
    if (contentWindow) { animate.reveal() }
  }, [animate, contentWindow])

  useEffect(() => loadTemplate(), [loadTemplate])
  useEffect(() => loadContentWindow(), [loadContentWindow])
  useEffect(() => displayContentWindow(), [displayContentWindow])

  if (!activeSection) return null

  return (
    <div className="bx--row mainContentRow">
      <ContentWindow content={ contentWindow } />
    </div>
  )
}
