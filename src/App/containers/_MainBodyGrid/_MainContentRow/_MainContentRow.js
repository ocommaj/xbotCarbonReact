import React, { useState, useEffect } from 'react';
import ContentWindow from '@components/ContentWindow';

export default function MainContentRow(props) {
  const { sections, activeSectionId, animate } = props,
        [ contentWindow, setContentWindow ] = useState(null);

  useEffect(() => { loadContentWindow() }, [activeSectionId])
  useEffect(() => { displayContentWindow() }, [contentWindow])

  function displayContentWindow() { if (contentWindow) { animate.reveal() } }

  function loadContentWindow() {
    const activeSection = !!activeSectionId ? sections[activeSectionId] : null,
          props = { activeSection, animate: animate.content },
          toLoad = !!activeSection ?
            <ContentWindow props={ props } /> : null;

    if (contentWindow) { animate.collapse(() => { setContentWindow(toLoad) }) }
        else { setContentWindow(toLoad) }
    }

  return (
    <div className="bx--row mainContentRow">
      { activeSectionId && contentWindow }
    </div>
  )
}
