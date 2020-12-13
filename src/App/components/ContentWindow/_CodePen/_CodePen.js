import React, { useState } from 'react';
import ResizablePane from '@components/ResizablePane';
import { GalleryEditors, SandboxEditors } from './_EditorsPane';

export default function CodePen(props) {
  const { galleryMode=false, srcData=null } = props;
  const [srcDoc, setSrcDoc] = useState();

  return (
    <div className="codepen">
      <ResizablePane id="codepenTopPane">
        {
          (!!galleryMode && !!srcData)
            ? <GalleryEditors setSrcDoc={ setSrcDoc } srcData={ srcData } />
            : <SandboxEditors setSrcDoc={ setSrcDoc } />
        }
      </ResizablePane>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={ srcDoc }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0" />
      </div>
    </div>
  );
}
