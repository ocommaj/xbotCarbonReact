import React, { useContext, useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
} from 'carbon-components-react';
import {
  Attachment24,
  SubtractAlt24,
  CloseOutline24
} from '@carbon/icons-react';
import { AppContext } from '@App';
import CodePen from '@components/ContentWindow/_CodePen';

const DOM = {
  WRAPPER: { CLASS: "codePenModal", TARGET_ID: "modalPortal" },
  HEADER_ICON: "headerIconButton",
  ADD_BTN: { CLASS: "addToReadingList", TITLE: "Pin to reading list" },
  REMOVE_BTN: { CLASS: "removeFromList", TITLE: "Remove from reading list" },
}

export default function CodePenModal(props) {
  const {
    modalState,
    srcData,
    isInReadingList=false
  } = props;
  const { setReadingList, showToolTips } = useContext(AppContext);
  const [readingListButton, setReadingListButton] = useState();

  const inListToggler = useMemo(() => {
    const baseStr = DOM.HEADER_ICON;
    const button = !isInReadingList ? DOM.ADD_BTN : DOM.REMOVE_BTN;
    const onClick = (item) => !isInReadingList ? _add(item) : _remove(item);
    const icon = !isInReadingList
      ? <Attachment24 />
      : (<>
          <SubtractAlt24 />
          <CloseOutline24 />
        </>);

    function _add(record) {
      const newEntry = { ...record };
      setReadingList(prevState => [newEntry, ...prevState]);
    }

    function _remove(record) {
      setReadingList(prevState => {
        const updatedList = prevState.filter(item => item._id !== record._id);
        return [...updatedList];
      })
    }

    return {
      icon,
      onClick,
      className: `${baseStr} ${button.CLASS}`,
      title: button.TITLE,
      ariaLabel: button.TITLE,
    }
  }, [isInReadingList, setReadingList])

  useEffect(() => setReadingListButton(inListToggler), [inListToggler]);

  if (!modalState.isOpen) return null
  return ReactDOM.createPortal(
    <ComposedModal
      className={ DOM.WRAPPER.CLASS }
      open={ modalState.isOpen }
      size={ 'lg' }
      onClose={ () => modalState.close() }
      preventCloseOnClickOutside={ true }>
      <ModalHeader title={ srcData.title }>
        <button
          className={ readingListButton.className }
          title={ showToolTips ? readingListButton.title : null }
          aria-label={ readingListButton.ariaLabel }
          onClick={ () => readingListButton.onClick(srcData) }>
          { readingListButton.icon }
        </button>
      </ModalHeader>
      <ModalBody hasForm={ true }>
        <CodePen galleryMode={ true } srcData={ srcData }/>
      </ModalBody>
    </ComposedModal>,
    document.getElementById(DOM.WRAPPER.TARGET_ID)
  );
}
