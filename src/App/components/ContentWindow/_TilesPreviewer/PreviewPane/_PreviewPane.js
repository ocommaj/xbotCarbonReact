import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '@App';
import {
  Attachment32,
  SubtractAlt32,
  CloseOutline32,
  Maximize32,
  Minimize32
} from '@carbon/icons-react';
import DOM from './_DOMkeys';

const PreviewPane = React.forwardRef((props, ref) => {
  const { article, maximize, normalize, isInReadingList=false } = props;
  const { animate, showToolTips, setReadingList } = useContext(AppContext);

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

  const inListToggler = useMemo(() => {
    const baseStr = DOM.BTN;
    const button = !isInReadingList ? DOM.ADD_BTN : DOM.REMOVE_BTN;
    const onClick = (item) => !isInReadingList ? _add(item) : _remove(item);
    const icon = !isInReadingList
      ? <Attachment32 />
      : (<>
          <SubtractAlt32 />
          <CloseOutline32 />
        </>);

    function _add(record) {
      const newEntry = { type: 'internalTutorial', ...record };
      setReadingList(prevState => [newEntry, ...prevState])
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
  }, [isInReadingList, setReadingList]);

  useEffect(() => setReadingListButton(inListToggler), [inListToggler]);
  useEffect(() => setExpanderButton(expandToggler), [expandToggler]);

  return (
    <div className={ DOM.WRAPPER } ref={ ref }>
      { article &&
        <div className={ DOM.CONTENT_COL }>
          <h1>{ article.title }</h1>
          { paragraphParser(article.content).map((paragraph, i) => {
              const key = `${DOM.CONTENT_COL}_para_${i}`;
              return <p key={ key }>{ paragraph }</p>
            }) }
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
            onClick={ () => readingListButton.onClick(article) }>
            { readingListButton.icon }
          </button>
        </div>
      }
    </div>
  )

});

function paragraphParser(text) {
  return text.match(/[^\r\n]+/g);
}

export default PreviewPane;
