import React from 'react'
import { MultiSelect } from 'carbon-components-react'
//import './_dropdown-filter.scss'

export default function DropdownFilter(props) {
  const { id, items, label, titleText } = props;

  return (
    <MultiSelect
          className="dropdownFilter"
          ariaLabel="multiselect content filter"
          key={`${id}_dropdownFilter`}
          id={id}
          items={items}
          label={label}
          titleText={titleText}
          />
  )
}
