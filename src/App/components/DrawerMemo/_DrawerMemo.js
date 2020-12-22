import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
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
  REMOVE_ITEM_BTN: "removeItem",
}

export default function DrawerMemo(props) {
  const {
    index,
    launchModal,
    remove,
    record: {
      _id, type, title, shortTitle='', template='', html='', css='', script=''
    }
  } = props;
  const srcDoc = (type === 'codePen') ? template(html, css, script) : null;

  return (
    <div className={ DOM.WRAPPER }>
    <Draggable draggableId={ _id } index={ index }>
    {(provided) => (
      <div
        { ...provided.draggableProps }
        { ...provided.dragHandleProps }
        ref={ provided.innerRef }>
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
        { (type === 'internalTutorial') &&
          <h3>{ title }</h3>
        }
        <button className={ DOM.COVER_LINK } onClick={ () => launchModal() }>
          <ContentView24 className={ DOM.OPEN_ICON } />
        </button>
        <button
          className={ DOM.REMOVE_ITEM_BTN }
          onClick={ (e) => remove(e.currentTarget) }>
          <SubtractAlt32 />
          <CloseOutline32 />
        </button>
      </div>
    )}
    </Draggable>
    </div>
  )
}
