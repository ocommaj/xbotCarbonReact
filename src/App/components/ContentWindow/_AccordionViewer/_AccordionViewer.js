import React, { useState } from 'react';
import { Accordion, AccordionItem, Link } from 'carbon-components-react';

import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const { content } = props,
        [accordionItems] = useState( loadItems(placeholderData) );

  return (
    <Accordion children={ accordionItems } />
  )

  function loadItems(fromList) {
    return fromList.map((item, idx) => {
      const key = `accordionItem_${item.id}`

      return (
        <AccordionItem
          key={ key }
          title={ <h3>{item.itemHeadline}</h3> }
          children={
            <>
              <p>{ item.belowTheFoldLabel }</p>
              <Link
                size='lg'
                target="_blank"
                href={ item.externalUrl }
                children={ item.externalUrlDisplay }
              />
            </> }
          />
        )
    })
  }
}
