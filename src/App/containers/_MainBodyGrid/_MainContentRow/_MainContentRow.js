import React, { useState, useRef, useCallback, useEffect } from 'react';
import ContentWindow, { templates } from '@components/ContentWindow';

export default function MainContentRow(props) {
  const { animate, activeSection } = props,
        [ nextWindow, setNextWindow ] = useState(null),
        [ contentWindow, setContentWindow ] = useState(null),
        anim = useRef(animate);

  const renderCount = useRef(1);
  useEffect(() => {
    console.log(`MainContentRow rendered ${renderCount.current} time(s)`)
    renderCount.current = renderCount.current + 1
  })

  const loadTemplate = useCallback(() => {
      if (!activeSection) return

      const template = templates[activeSection.windowType];
      setNextWindow( template({
              'animate': anim.current.content,
              'mainId': activeSection.mainId,
              'title': activeSection.defaultStr,
              'tabs': activeSection.options.tabs,
            })
          );
  }, [setNextWindow, activeSection])

  const loadContentWindow = useCallback(() => {
    setContentWindow(prevState => !prevState
       ? nextWindow
       : anim.current.collapse( () => setContentWindow(nextWindow) )
    )
  }, [nextWindow, setContentWindow])

  const displayContentWindow = useCallback(() => {
    if (contentWindow) { anim.current.reveal() }
  }, [contentWindow])

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
