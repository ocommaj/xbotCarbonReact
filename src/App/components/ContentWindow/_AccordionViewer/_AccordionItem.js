import React from 'react';
import { Launch16 } from '@carbon/icons-react';
import { AccordionItem, Link } from 'carbon-components-react';

export default function ExtendedItem({ props }) {
  const {
    key,
    item,
    setExpandedItem,
    isOpen,
  } = props;

  return (
    <AccordionItem
      key={ key }
      open={ isOpen }
      title={ <h3>{ item.itemHeadline }</h3> }
      onHeadingClick={ () => setExpandedItem(key) }>
      <p>
        { item.belowTheFoldLabel }
      </p>
      <Link
        size='lg'
        target="_blank"
        href={ item.externalUrl }>
        { item.externalUrlDisplay }
        <Launch16 style={
          { margin: 'auto',
            display: 'inline-block',
            marginLeft: '.25rem' } } />
      </Link>
    </AccordionItem>
  )
}
