import React, { useContext, useState } from 'react';
import StickyButton from '@components/StickyButton';
import { AppContext } from '@App';
import Maximize32 from '@carbon/icons-react/lib/maximize/32';
import Minimize32 from '@carbon/icons-react/lib/minimize/32';

const PreviewPane = React.forwardRef((props, ref) => {
  const { article, maximize, normalize } = props;
  const { animate, showToolTips } = useContext(AppContext);
  const [ isMaximized, setIsMaximized ] = useState(false);

  return (
    <div className="previewPane" ref={ ref }>
      <StickyButton
        clickHandler={ () => clickHandler() }
        pictogram={ isMaximized ? <Minimize32 /> : <Maximize32 /> }
        assistiveText={ isMaximized ? "shrink" : "expand" }
        hoverAnimation={ animate.stickyButton.bounceScale }
        showToolTip={ showToolTips }
        kind="tertiary" />
    </div>
  )

  function clickHandler() {
    animate.wrapperTimeline()
      .add(isMaximized ? normalize().play() : maximize().play())
      .then(() => setIsMaximized(prevState => !prevState));
  }
})

export default PreviewPane

/*<div className="contentColumn">
  <h1>{ title }</h1>
</div>
<div className="sideColumn">
</div>*/

/*<div className="previewPane" ref={ ref }>
  <div className="contentColumn">
    <h1>{ title }</h1>
  </div>
  <div className="buttonColumn">
  <StickyButton
    clickHandler={ () => clickHandler() }
    pictogram={ isMaximized ? <Minimize32 /> : <Maximize32 /> }
    assistiveText={ isMaximized ? "shrink" : "expand" }
    hoverAnimation={ animate.stickyButton.bounceScale }
    showToolTip={ showToolTips }
    kind="tertiary" />
  </div>
</div>*/

/*<div className="buttonColumn">
<StickyButton
  clickHandler={ () => clickHandler() }
  pictogram={ isMaximized ? <Minimize32 /> : <Maximize32 /> }
  assistiveText={ isMaximized ? "shrink" : "expand" }
  hoverAnimation={ animate.stickyButton.bounceScale }
  showToolTip={ showToolTips }
  kind="tertiary" />
</div>*/
