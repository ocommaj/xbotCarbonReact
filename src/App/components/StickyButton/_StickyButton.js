import React from 'react'
import { Button } from 'carbon-components-react'
import Graphic from '@components/VectorGraphics'

const DOM = {
  WRAPPER: "stickyButton"
}

export default function StickyButton(props) {
  const {
    className,
    clickHandler,
    pictogram,
    assistiveText,
    hoverAnimation,
    showToolTip,
    kind
  } = props;

  return (
  <span className={ `${DOM.WRAPPER} ${className && className}`}>
    <Button
      className={ toggleToolTipClassName() }
      kind={ kind || 'primary' }
      onClick={ () => {
        try { clickHandler() }
        catch { return }
      } }
      onMouseEnter={ (e) => {
        try { hoverAnimation(e.target) }
        catch { return }
      } }
    >
      <span className="bx--assistive-text">{ assistiveText }</span>
      <Graphic pictogram={ pictogram } />
    </Button>
  </span>
  )

  function toggleToolTipClassName() {
    const baseClassStr = "bx--btn bx--btn--primary bx--btn--icon-only";
    const toolTipStr = "bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-center";

    return !!showToolTip ? baseClassStr.concat(' ', toolTipStr) : baseClassStr
  }
}
