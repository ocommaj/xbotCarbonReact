import React, { useState, useEffect } from 'react';
import { Accordion } from 'carbon-components-react';
import AccordionItem from './_AccordionItem';
import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const { content } = props,
        [expandedItem, setExpandedItem] = useState(),
        [accordionItems, setAccordionItems] = useState();

  useEffect(() => {
    const loadItems = (fromList) => {
          return fromList.map((item, idx) => {
                  const key = `accordionItem_${item.id}`,
                        itemProps = {
                          key,
                          item,
                          setExpandedItem,
                          isOpen: key === expandedItem ? true : false };

                  return <AccordionItem key={key} props={ itemProps } /> }) }

    setAccordionItems( loadItems(placeholderData) )

    }, [expandedItem])

  return (
    <Accordion
      className="accordionViewer"
      children={ accordionItems }
    />
  )
}
