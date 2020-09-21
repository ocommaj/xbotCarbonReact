import React from 'react'
import { Button } from 'carbon-components-react'
import WrappedPictogram from '@components/VectorGraphics/WrappedPictogram'
import GearVG from '@components/VectorGraphics/Gear'

export default function StickyButton() {
  return (
  <span className="stickyButton">
  <Button className="bx--btn bx--btn--primary bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-center">
  <span className="bx--assistive-text">Login</span>

  <WrappedPictogram pictogram={<GearVG />} />
  </Button>
  </span>
  )
}
