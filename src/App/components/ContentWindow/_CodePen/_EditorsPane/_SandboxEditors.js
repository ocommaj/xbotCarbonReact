import React, { useEffect } from 'react'
import { useLocalStorage } from '@hooks';
import CodeMirrorEditor from '@components/CodeMirrorEditor';
import DefaultSrc from './_DefaultSrc';

export default function SandboxEditors(props) {
  const { setSrcDoc } = props;
  const prefix = 'codepen-';
  const [html, setHtml] = useLocalStorage(`${prefix}-html`, DefaultSrc.html());
  const [css, setCss] = useLocalStorage(`${prefix}-css`, DefaultSrc.css());
  const [js, setJs] = useLocalStorage(`${prefix}-js`, DefaultSrc.js());

  useEffect(() => {
    const timeout = setTimeout(
          setSrcDoc( DefaultSrc.template(html, css, js) ) , 250)

    return () => clearTimeout(timeout)
  }, [html, css, js, setSrcDoc]);

  return (
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
  )
}
