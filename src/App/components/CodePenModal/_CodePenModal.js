import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button
} from 'carbon-components-react';
import { Box24 } from '@carbon/icons-react';
import { AppContext } from '@App';
import CodePen from '@components/ContentWindow/_CodePen';

const DOM = {
  WRAPPER: "codePenModal",
  HEADER_ICON_BTN: "headerIconButton"
}

export default function CodePenModal(props) {
  const {
    modalState,
    srcData,
  } = props;
  const { setSideDrawerMemos } = useContext(AppContext);

  if (!modalState.isOpen) return null
  return ReactDOM.createPortal(
    <ComposedModal
      className={ DOM.WRAPPER }
      open={ modalState.isOpen }
      size={ 'lg' }
      onClose={ () => modalState.close() }
      preventCloseOnClickOutside={ true }>
      <ModalHeader title={ `Title` }>
        <Button
          className={ DOM.HEADER_ICON_BTN }
          renderIcon={ Box24 }
          kind={ "tertiary" }
          iconDescription={ 'Pin to Memo Board' }
          onClick={ () => addToMemoDrawer() } />
      </ModalHeader>
      <ModalBody hasForm={ true }>
        <CodePen galleryMode={ true } srcData={ srcData }/>
      </ModalBody>
    </ComposedModal>,
    document.getElementById('modalPortal')
  );


  function addToMemoDrawer() {
    setSideDrawerMemos(prevState => {
      return _isAlreadyMemo() ? prevState : [srcData, ...prevState];

      function _isAlreadyMemo() {
        for (const memo of prevState) {
          if (memo.id === srcData.id) return true;
          return false;
        }
      }
    })
  }
}
