import React from 'react'
import { Button } from 'carbon-components-react'
import Graphic from '@components/VectorGraphics'

export default function StickyButton(props) {
  const {
    clickHandler,
    assistiveText
  } = props;

  const carbonClassStr = "bx--btn bx--btn--primary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-center";

  return (
  <span className="stickyButton">
    <Button className={ carbonClassStr } onClick={ () => clickHandler() }>
      <span className="bx--assistive-text">{ assistiveText}</span>
      <Graphic pictogram={ 'gear' } />
    </Button>
  </span>
  )
}
