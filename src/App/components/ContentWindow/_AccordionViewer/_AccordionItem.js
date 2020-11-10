import React from 'react';
import { AccordionItem, Link } from 'carbon-components-react';

export default function ExtendedItem({ props }) {
  const {
    key,
    item,
    expandedItem,
    setExpandedItem,
    isOpen
  } = props;

  return (
    <AccordionItem
      key={ key }
      open={ isOpen }
      title={ <h3>{ item.itemHeadline }</h3> }
      onHeadingClick={ () => setExpandedItem(key) }

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
}
