import React, { useState, useEffect } from 'react';
import ContentWindow, { templates } from '@components/ContentWindow';

export default function MainContentRow(props) {
  const { sections, activeSectionId, animate } = props,
        [ contentWindow, setContentWindow ] = useState(null);

  useEffect(loadContentWindow, [activeSectionId, animate, sections] )
  useEffect(displayContentWindow, [animate, contentWindow])

  function displayContentWindow() { if (contentWindow) { animate.reveal() } }

  function loadContentWindow() {
    const activeSection = !!activeSectionId ? sections[activeSectionId] : null;

    if (!activeSection) return;

    const props = {
            'animate': animate.content,
            'mainId': activeSection.mainId,
            'title': activeSection.defaultStr,
            'tabs': activeSection.options.tabs,
          },
          template = templates[activeSection.windowType],
          content = template(props),
          toLoad = <ContentWindow content={ content } />;

    if (contentWindow) { animate.collapse(() => { setContentWindow(toLoad) }) }
        else { setContentWindow(toLoad) }
    }

  return (
    <div className="bx--row mainContentRow">
      { activeSectionId && contentWindow }
    </div>
  )
}
