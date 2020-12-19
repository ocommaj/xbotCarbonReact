import React, { useContext, useEffect, useMemo, useState } from 'react';
import StickyButton from '@components/StickyButton';
import { AppContext } from '@App';
import {
  Attachment32,
  SubtractAlt32,
  CloseOutline32,
  Maximize32,
  Minimize32
} from '@carbon/icons-react';

const DOM = {
  BTN: "previewPaneButton",
  ADD_BTN: { CLASS: "addToReadingList", TITLE: "Add to reading list" },
  REMOVE_BTN: { CLASS: "removeFromList", TITLE: "Remove from reading list" }
}

const PreviewPane = React.forwardRef((props, ref) => {
  const { article, maximize, normalize, inReadingList=false } = props;
  const {
    animate, showToolTips, setSideDrawerMemos
  } = useContext(AppContext);

  const [ isMaximized, setIsMaximized ] = useState(false);
  const [readingListButton, setReadingListButton] = useState();
  const [testToggler, setTestToggler] = useState(true);

  const updateButton = useMemo(() => {
    const baseStr = DOM.BTN;
    const button = !!testToggler ? DOM.ADD_BTN : DOM.REMOVE_BTN;
    //const button = !inReadingList ? DOM.ADD_BTN : DOM.REMOVE_BTN;
    const onClick = (record) => {
      //return !inReadingList ? _addToList(record) : _removeFromList(record)
      return !!testToggler ? _addToList(record) : _removeFromList(record)
    }
    //const icon = !inReadingList
    const icon = !!testToggler
      ? <Attachment32 />
      : (<>
          <SubtractAlt32 />
          <CloseOutline32 />
        </>);

    function _addToList(record) {
      setTestToggler(false)
      //setSideDrawerMemos(prevState => [record, ...prevState])
    }

    function _removeFromList(record) {
      setTestToggler(true)
      /*setSideDrawerMemos(prevState => {
        const updatedList = prevState.filter(item => item.id !== record.id);
        return [...updatedList];
      })*/
    }

    return {
      icon,
      onClick,
      className: `${baseStr} ${button.CLASS}`,
      title: button.TITLE,
      ariaLabel: button.TITLE,
    }
  }, [inReadingList, testToggler, setSideDrawerMemos])

  useEffect(() => setReadingListButton(updateButton), [updateButton]);

  return (
    <div className="previewPane" ref={ ref }>
      <h1>{ article && article.title }</h1>
      <StickyButton
        clickHandler={ () => clickHandler() }
        pictogram={ isMaximized ? <Minimize32 /> : <Maximize32 /> }
        assistiveText={ isMaximized ? "shrink" : "expand" }
        hoverAnimation={ animate.stickyButton.bounceScale }
        showToolTip={ showToolTips }
        kind="tertiary" />
      { article &&
        <button
          className={ readingListButton.className }
          title={ showToolTips ? readingListButton.title : null }
          aria-label={ readingListButton.ariaLabel }
          onClick={ () => readingListButton.onClick() }>
          { readingListButton.icon }
        </button>
      }
    </div>
  )

  function clickHandler() {
    animate.wrapperTimeline()
      .add(isMaximized ? normalize().play() : maximize().play())
      .then(() => setIsMaximized(prevState => !prevState));
  }
})

export default PreviewPane
