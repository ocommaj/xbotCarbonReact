import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button
} from 'carbon-components-react';
import { NotebookReference32 } from '@carbon/icons-react';
import { AppContext } from '@App';
import CodePen from '@components/ContentWindow/_CodePen';

const DOM = {
  WRAPPER: "codePenModal",
  HEADER_ICON_BTN: "headerIconButton",
  CARBON_ICON_BTN: "bx--btn bx--btn--tertiary bx--btn--icon-only",
  CARBON_TIPTEXT: "bx--assistive-text",
  CARBON_TOOLTIP: "bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-center"
}

export default function CodePenModal(props) {
  const {
    modalState,
    srcData
  } = props;
  const { setSideDrawerMemos, showToolTips } = useContext(AppContext);

  if (!modalState.isOpen) return null
  return ReactDOM.createPortal(
    <ComposedModal
      className={ DOM.WRAPPER }
      open={ modalState.isOpen }
      size={ 'lg' }
      onClose={ () => modalState.close() }
      preventCloseOnClickOutside={ true }>
      <ModalHeader title={ srcData.title }>
        <Button
          className={ toggleToolTipClassName() }
          renderIcon={ NotebookReference32 }
          title={ showToolTips ? null : 'Pin to Reading List'  }
          aria-label={ 'Pin to Reading List' }
          kind={ "tertiary" }
          onClick={ () => addToMemoDrawer() }>
          <span className={DOM.CARBON_TIPTEXT}>{ 'Pin to Reading List' }</span>
        </Button>
      </ModalHeader>
      <ModalBody hasForm={ true }>
        <CodePen galleryMode={ true } srcData={ srcData }/>
      </ModalBody>
    </ComposedModal>,
    document.getElementById('modalPortal')
  );


  async function addToMemoDrawer() {
    setSideDrawerMemos(prevState => {
      return !!_isAlreadyMemo() ? [ ...prevState ] : [srcData, ...prevState];

      function _isAlreadyMemo() {
          for (const memo of prevState) {
            if (memo.id === srcData.id) return true;
          }
          return false
        }
      })
    }

  function toggleToolTipClassName() {
    const baseClass = `${DOM.HEADER_ICON_BTN} ${DOM.CARBON_ICON_BTN}`;
    const toolTip = DOM.CARBON_TOOLTIP;

    return !!showToolTips ? baseClass.concat(' ', toolTip) : baseClass;
  }
}
