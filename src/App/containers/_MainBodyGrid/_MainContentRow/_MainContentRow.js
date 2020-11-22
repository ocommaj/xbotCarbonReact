import React, { useState, useCallback, useEffect } from 'react';
import ContentWindow, { templates } from '@components/ContentWindow';

export default function MainContentRow(props) {
  const { sections, activeSectionId, animate } = props,
        [ contentWindow, setContentWindow ] = useState(null);

  const displayContentWindow = useCallback(() => {
    if (contentWindow) { animate.reveal() }
  }, [animate, contentWindow])

  useEffect(() => loadContentWindow(), [activeSectionId] )
  useEffect(() => displayContentWindow(), [displayContentWindow])

  function loadContentWindow() {
    if (!activeSectionId) return
    const activeSection = sections[activeSectionId];

    const props = {
            'animate': animate.content,
            'mainId': activeSection.mainId,
            'title': activeSection.defaultStr,
            'tabs': activeSection.options.tabs,
          },
          template = templates[activeSection.windowType],
          toLoad = template(props);

    if (contentWindow) { animate.collapse(() => { setContentWindow(toLoad) }) }
        else { setContentWindow(toLoad) }
    }

  if (!activeSectionId) return null

  return (
    <div className="bx--row mainContentRow">
      <ContentWindow content={ contentWindow } />
    </div>
  )
}
