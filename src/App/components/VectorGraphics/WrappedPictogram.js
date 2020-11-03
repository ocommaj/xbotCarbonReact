import React from 'react'
import CargoShip240 from './_CargoShip240'
import Gear from './_Gear'
import IdBadge from './_IdBadge'
import UserProfile from './_UserProfile'

export default function WrappedPictogram(props) {
  const {
    pictogram,
    style,
    onClick
  } = props

  return (
    <span className="pictogramWrapper" style={style} onClick={onClick}>
      { appGraphics[pictogram] || pictogram }
    </span>
  )
}

const appGraphics = {
  'cargoShip240' : <CargoShip240 />,
  'gear' : <Gear />,
  'idBadge'  : <IdBadge />,
  'userProfile' : <UserProfile />
}
