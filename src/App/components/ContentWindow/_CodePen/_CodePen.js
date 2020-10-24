import React, { useState } from 'react';
import ResizablePane from '@components/ResizablePane';
import EditorsPane from './_EditorsPane';

export default function CodePen() {
  const [srcDoc, setSrcDoc] = useState()

  return (
    <div className="codepen">
      <ResizablePane id="codepenTopPane" content={
        <EditorsPane setSrcDoc={ setSrcDoc } /> }/>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={ srcDoc }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0" />
      </div>
    </div>
  )
}
