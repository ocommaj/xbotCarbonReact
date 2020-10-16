import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/display/autorefresh';
import './mirrorCarbonGray90.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Maximize20, Minimize20 } from '@carbon/icons-react';

export default function CodeMirrorEditor(props) {
  const {
    displayName,
    language,
    value,
    onChange
  } = props,
  [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`cm-editor-container ${ open ? '' : 'collapsed' }`}>
      <div className="cm-editor-title">
        {displayName}
        <button
          type='button'
          className='expand-collapse-button'
          onClick={ () => setOpen(prevOpen => !prevOpen) }>
          { open ? <Minimize20 /> : <Maximize20 /> }
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          theme: 'mirrorCarbonGray90',
          mode: language,
          lineNumbers: true,
          autoCloseBrackets: true,
          autoRefresh: true
        }}
      />
    </div>
  )
}
