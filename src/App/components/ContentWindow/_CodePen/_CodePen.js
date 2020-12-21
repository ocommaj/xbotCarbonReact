import React, { useState } from 'react';
import { Resizable } from 're-resizable';
import { GalleryEditors, SandboxEditors } from './_EditorsPane';

const DOM = {
  WRAPPER: "codePen",
  PANE: "pane",
  TOP: "top-pane",
  BOTTOM: "bottom-pane",
}

export default function CodePen(props) {
  const { galleryMode=false, srcData=null } = props;
  const [srcDoc, setSrcDoc] = useState();

  return (
    <div className={ DOM.WRAPPER }>
      <Resizable
        className={ `${DOM.PANE} ${DOM.TOP}` }
        enable={ { bottom: true } }>
        {
          (!!galleryMode && !!srcData)
            ? <GalleryEditors setSrcDoc={ setSrcDoc } srcData={ srcData } />
            : <SandboxEditors setSrcDoc={ setSrcDoc } />
        }
      </Resizable>
      <div className={ `${DOM.PANE} ${DOM.BOTTOM}` }>
        <iframe
          srcDoc={ srcDoc }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0" />
      </div>
    </div>
  );
}

/*<ResizablePane id="codepenTopPane">
  {
    (!!galleryMode && !!srcData)
      ? <GalleryEditors setSrcDoc={ setSrcDoc } srcData={ srcData } />
      : <SandboxEditors setSrcDoc={ setSrcDoc } />
  }
</ResizablePane>*/
