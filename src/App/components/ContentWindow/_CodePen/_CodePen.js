import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import DefaultSrc from './_DefaultSrc';
import useLocalStorage from '@hooks/useLocalStorage';

export default function CodePen({props}) {
  const [html, setHtml] = useLocalStorage('html', DefaultSrc.html()),
        [css, setCss] = useLocalStorage('css', DefaultSrc.css()),
        [js, setJs] = useLocalStorage('js', DefaultSrc.js()),
        [srcDoc, setSrcDoc] = useState();

  useEffect(() => { setSrcDoc( DefaultSrc.template(html, css, js) ) }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc( DefaultSrc.template(html, css, js) ) }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="codepen">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={ html }
          onChange={ setHtml } />
        <Editor
          language="css"
          displayName="CSS"
          value={ css }
          onChange={ setCss } />
        <Editor
          language="javascript"
          displayName="JS"
          value={ js }
          onChange={ setJs } />

      </div>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={ srcDoc }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}
