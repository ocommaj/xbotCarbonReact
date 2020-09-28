import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '@App';
import { MainBodyContext } from '@containers/_MainBodyGrid';
import ContentWindow from '@components/ContentWindow';

export default function MainContentRow() {
  const { sections } = useContext(AppContext),
        { activeSectionId, animate } = useContext(MainBodyContext),
        [ contentWindow, setContentWindow ] = useState(),
        anim = animate.contentWindow,
        activeSection = sections[activeSectionId],
        props = { anim, activeSection };

  useEffect(() => { loadContentWindow() }, [activeSectionId])
  useEffect(() => { if (contentWindow) { anim.reveal() } }, [contentWindow])

  function loadContentWindow() {
    const toLoad = activeSectionId === "/" ? null : ContentWindow(props)

    if (!contentWindow) { setContentWindow(toLoad) }
      else { anim.collapse(() => { setContentWindow(toLoad) }) }

  }

  /*function useSectionId() {
    const [contWindow, setContWindow] = useState()
  }*/

  return (
    <div className="bx--row mainContentRow">
      { contentWindow }
    </div>
  )
}
