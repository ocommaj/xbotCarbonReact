import React, { useContext } from 'react';
import StickyButton from '@components/StickyButton';
import { AppContext } from '@App';
import Maximize32 from '@carbon/icons-react/lib/maximize/32';

const PreviewPane = React.forwardRef( ({props}, ref) => {
  const { animate, showToolTips } = useContext(AppContext);
  const { previewHeadline } = props;

  return (
    <div className="previewPane" ref={ ref }>
      <div className="contentColumn">
        <h1>{ previewHeadline }</h1>
      </div>
      <div className="buttonColumn">
      <StickyButton
        clickHandler={ console.log('clicky') }
        pictogram={ <Maximize32 /> }
        assistiveText={ "expand preview" }
        hoverAnimation={ animate.stickyButton.bounceScale }
        showToolTip={ showToolTips }
        kind="tertiary" />
      </div>
    </div>
  )
})

export default PreviewPane
