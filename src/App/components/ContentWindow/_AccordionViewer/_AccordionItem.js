import React from 'react';
import { Launch16 } from '@carbon/icons-react';
import { AccordionItem, Link } from 'carbon-components-react';

const DOM = {
  ITEM_SUMMARY: 'itemSummaryText'
}

export default function ExtendedItem({ props }) {
  const {
    className,
    isOpen,
    item,
    key,
    setExpandedItem
  } = props;

  return (
    <AccordionItem
      className={ className }
      key={ key }
      open={ isOpen }
      title={ <h3>{ item.title }</h3> }
      onHeadingClick={ () => setExpandedItem(key) }>
      <p className={ DOM.ITEM_SUMMARY }>
        { item.summary }
      </p>
      <Link
        size='lg'
        target="_blank"
        href={ item.externalUrl }>
        { item.source }
        <Launch16 style={
          { margin: 'auto',
            display: 'inline-block',
            marginLeft: '.25rem' } } />
      </Link>
    </AccordionItem>
  )
}
