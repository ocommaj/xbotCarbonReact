import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
} from 'carbon-components-react';
import CodePen from '@components/ContentWindow/_CodePen';

const DOM = { WRAPPER: "codePenModal" }

export default function CodePenModal(props) {
  const {
    modalState,
    srcData,
  } = props;

  if (!modalState.isOpen) return null
  return ReactDOM.createPortal(
    <ComposedModal
      className={ DOM.WRAPPER }
      open={ modalState.isOpen }
      size={ 'lg' }
      onClose={ () => modalState.close() }
      preventCloseOnClickOutside={ true }>
    <ModalHeader title={ `Title` } />
    <ModalBody hasForm={ true }>
      <CodePen galleryMode={ true } srcData={ srcData }/>
    </ModalBody>
    </ComposedModal>,
    document.getElementById('modalPortal')
  );
}
