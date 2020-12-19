import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '@App';
import {
  Attachment32,
  SubtractAlt32,
  CloseOutline32,
  Maximize32,
  Minimize32
} from '@carbon/icons-react';

const DOM = {
  WRAPPER: "previewPane",
  CONTENT_COL: "previewPaneContentCol",
  BUTTON_COL: "previewPaneButtonCol",
  BTN: "previewPaneButton",
  ADD_BTN: { CLASS: "addToReadingList", TITLE: "Add to reading list" },
  REMOVE_BTN: { CLASS: "removeFromList", TITLE: "Remove from reading list" },
  EXPAND_BTN: { CLASS: "expandPane", TITLE: "Expand article view" },
  REDUCE_BTN: { CLASS: "reducePane", TITLE: "Reduce article view" }
};

const PreviewPane = React.forwardRef((props, ref) => {
  const { article, maximize, normalize, inReadingList=false } = props;
  const { animate, showToolTips, setReadingList } = useContext(AppContext);

  const [testToggler, setTestToggler] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [readingListButton, setReadingListButton] = useState();
  const [expanderButton, setExpanderButton] = useState();

  const expandToggler = useMemo(() => {
    const baseStr = DOM.BTN;
    const button = !!isMaximized ? DOM.REDUCE_BTN : DOM.EXPAND_BTN;
    const onClick = () => _clickHandler();
    const icon = !!isMaximized ? <Minimize32 /> : <Maximize32 />;

    function _clickHandler() {
      animate.wrapperTimeline()
        .add( !!isMaximized ? normalize().play() : maximize().play() )
        .then(() => setIsMaximized(prevState => !prevState));
    }

    return {
      icon,
      onClick,
      className: `${baseStr} ${button.CLASS}`,
      title: button.TITLE,
      ariaLabel: button.TITLE
    }
  }, [animate, maximize, normalize, isMaximized]);

  const rListToggler = useMemo(() => {
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
      //setReadingList(prevState => [record, ...prevState])
    }

    function _removeFromList(record) {
      setTestToggler(true)
      /*setReadingList(prevState => {
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
  }, [inReadingList, testToggler, setReadingList]);

  useEffect(() => setReadingListButton(rListToggler), [rListToggler]);
  useEffect(() => setExpanderButton(expandToggler), [expandToggler]);

  return (
    <div className={ DOM.WRAPPER } ref={ ref }>
      { article &&
        <div className={ DOM.CONTENT_COL }>
          <h1>{ article.title }</h1>
        </div>
      }
      { article &&
        <div className={ DOM.BUTTON_COL }>
          <button
            className={ expanderButton.className  }
            title={ showToolTips ? expanderButton.title : null }
            aria-label={ expanderButton.ariaLabel }
            onClick={ () => expanderButton.onClick() }>
             { expanderButton.icon }
          </button>
          <button
            className={ readingListButton.className }
            title={ showToolTips ? readingListButton.title : null }
            aria-label={ readingListButton.ariaLabel }
            onClick={ () => readingListButton.onClick() }>
            { readingListButton.icon }
          </button>
        </div>
      }
    </div>
  )

});

export default PreviewPane;
