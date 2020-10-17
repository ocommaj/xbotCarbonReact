import React, { useState, useEffect } from 'react';
import ResizablePane from '@components/ResizablePane';
import EditorsPane from './_EditorsPane';

export default function CodePen() {
  const [srcDoc, setSrcDoc] = useState()

  return (
    <div className="codepen">
      <ResizablePane id="codepenTopPane" content={
        <EditorsPane srcDoc={ srcDoc } setSrcDoc={ setSrcDoc } /> }/>
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
