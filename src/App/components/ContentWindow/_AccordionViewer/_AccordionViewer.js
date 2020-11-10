import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem, Link } from 'carbon-components-react';

import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const { content } = props,
        [expandedItem, setExpandedItem] = useState(),
        [accordionItems] = useState( loadItems(placeholderData) );

  useEffect(() => {
    console.log(expandedItem)
    loadItems(placeholderData)

  }, [expandedItem])

  return (
    <Accordion
      className="accordionViewer"
      children={ accordionItems } />
  )

  function loadItems(fromList) {
    return fromList.map((item, idx) => {
      const key = `accordionItem_${item.id}`;

      return (
        <AccordionItem
          key={ key }
          title={ <h3>{ item.itemHeadline }</h3> }
          onClick={ e => expandOnlyThisItem(e.currentTarget) }

          children={
            <>
              <p>{ item.belowTheFoldLabel }</p>
              <Link
                size='lg'
                target="_blank"
                href={ item.externalUrl }
                children={ item.externalUrlDisplay } />
            </>
            }
          />
        )
    })
  }

  function expandOnlyThisItem(caller) {
    let activeTag = 'bx--accordion__item--active',
        items = caller.parentElement.children;


    for (let i = 0; i < items.length; i++) {
      if ( items[i].classList.contains(activeTag) && items[i] !== caller )
        { items[i].classList.toggle(activeTag)
      }
    }


  }

}
