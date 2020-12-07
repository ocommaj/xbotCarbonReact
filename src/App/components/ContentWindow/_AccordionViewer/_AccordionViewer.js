import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSkeleton } from 'carbon-components-react';
import AccordionItem from './_AccordionItem';
import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const loading = false;
  const [expandedItem, setExpandedItem] = useState(null);

  const accordionItemArgs = (item) => {
    const key = `accordionItem_${item.id}`;
    return {
      item,
      key,
      setExpandedItem,
      isOpen: key === expandedItem,
    }
  }

  if (loading) return <AccordionSkeleton open={ false } count={ 15 }/>
  return (
    <Accordion className="accordionViewer">
      { placeholderData.map((item) => {
          const props = accordionItemArgs(item);
          return <AccordionItem key={ props.key } props={ props } />
        }) }
    </Accordion>
  )
}
