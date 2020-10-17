import React, { useState, useEffect } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import CodeMirrorEditor from '@components/CodeMirrorEditor';
import ResizablePane from '@components/ResizablePane';
import DefaultSrc from './_DefaultSrc';

export default function CodePen({props}) {
  const [html, setHtml] = useLocalStorage('html', DefaultSrc.html()),
        [css, setCss] = useLocalStorage('css', DefaultSrc.css()),
        [js, setJs] = useLocalStorage('js', DefaultSrc.js()),
        [srcDoc, setSrcDoc] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc( DefaultSrc.template(html, css, js) ) }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="codepen">
      <ResizablePane id="codepenTopPane" content={
        <>
        <CodeMirrorEditor
          language="xml"
          displayName="HTML"
          value={ html }
          onChange={ setHtml } />
        <CodeMirrorEditor
          language="css"
          displayName="CSS"
          value={ css }
          onChange={ setCss } />
        <CodeMirrorEditor
          language="javascript"
          displayName="JS"
          value={ js }
          onChange={ setJs } />
        </>
      }/>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={ srcDoc }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
        />
      </div>
    </div>
  )
}
