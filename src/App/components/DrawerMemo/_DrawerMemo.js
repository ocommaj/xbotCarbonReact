import React from 'react';
import {
  ContentView24,
  SubtractAlt32,
  CloseOutline32,
 } from '@carbon/icons-react';

const DOM = {
  WRAPPER: "drawerMemo",
  IFRAME: "iFrameMemoPreview",
  COVER_LINK: "coverLink",
  OPEN_ICON: "drawerMemoOpenIcon",
  REMOVE_ITEM_BTN: "removeItem"
}

export default function DrawerMemo(props) {
  const {
    launchModal,
    removeItem,
    record,
    record: { type, title, template='', html='', css='', script='' }
  } = props;
  const srcDoc = (type === 'codePen') ? template(html, css, script) : null;

  return (
    <div className={ DOM.WRAPPER }>
      { (type === 'codePen') &&
        <iframe
          className={ DOM.IFRAME }
          loading="lazy"
          sandbox="allow-scripts allow-pointer-lock"
          scrolling="no"
          srcDoc={ srcDoc }
          tabIndex="-1"
          title={ title }
          frameBorder="0"
        />
      }
      <button className={ DOM.COVER_LINK } onClick={ () => launchModal() }>
        <ContentView24 className={ DOM.OPEN_ICON } />
      </button>
      <button
        className={ DOM.REMOVE_ITEM_BTN }
        onClick={ (e) => removeItem(e.currentTarget) }>
        <SubtractAlt32 />
        <CloseOutline32 />
      </button>
    </div>
  )
}
