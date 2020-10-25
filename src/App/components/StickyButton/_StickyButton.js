import React from 'react'
import { Button } from 'carbon-components-react'
import Graphic from '@components/VectorGraphics'

export default function StickyButton(props) {
  const {
    clickHandler,
    pictogram,
    assistiveText,
    hoverAnimation
  } = props;

  const carbonClassStr = "bx--btn bx--btn--primary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-center";

  return (
  <span className="stickyButton">
    <Button
      className={ carbonClassStr }
      onClick={ () => {
        try { clickHandler() }
        catch { return }
      } }
      onMouseEnter={ (e) => {
        try { hoverAnimation(e.target) }
        catch { return }
      } }
    >
      <span className="bx--assistive-text">{ assistiveText}</span>
      <Graphic pictogram={ pictogram } />
    </Button>
  </span>
  )
}
