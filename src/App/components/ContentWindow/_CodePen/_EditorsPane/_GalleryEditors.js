import React, { useState, useEffect } from 'react';
import CodeMirrorEditor from '@components/CodeMirrorEditor';

const fallback = {
  html: `# No html code`,
  style: `// No stylesheet`,
  script: `// Unscripted`,
};

export default function GalleryEditors(props) {
  const { setSrcDoc, srcData } = props;
  const [html, setHtml] = useState(srcData.html || fallback.html);
  const [css, setCss] = useState(srcData.css || fallback.style);
  const [script, setScript] = useState(srcData.script || fallback.script);

  useEffect(() => {
    const timeout = setTimeout(
          setSrcDoc(() => srcData.template(html, css, script)
          ) , 250)

    return () => clearTimeout(timeout)
  }, [html, css, script, setSrcDoc]);

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
      value={ script }
      onChange={ setScript } />
    </>
  )
}
