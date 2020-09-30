import React from 'react'
import { MultiSelect } from 'carbon-components-react'

export default function DropdownFilter({props}) {
  const { id, items, label, titleText } = props;

  return (
    <MultiSelect
      className="dropdownFilter"
      ariaLabel="multiselect content filter"
      id={id}
      items={items}
      label={label}
      titleText={titleText} />
  )

}
