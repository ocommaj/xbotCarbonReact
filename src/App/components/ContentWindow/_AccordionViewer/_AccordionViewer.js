import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSkeleton } from 'carbon-components-react';
import AccordionItem from './_AccordionItem';
import { useArticlesQuery } from '@hooks/ApolloClient';
import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const { activeSection: { apolloQuery } } = props;
  const query = {
    input: { ...apolloQuery.input, pageSize: 20 },
    pattern: apolloQuery.pattern
  };

  const { queryResponse, queryLoading } = useArticlesQuery(query);
  const [expandedItem, setExpandedItem] = useState(null);

  const accordionItemArgs = (item) => {
    const key = `accordionItem_${item.id}`;
    return {
      item,
      key,
      setExpandedItem,
      isOpen: key === expandedItem,
    }
  };

  if (queryLoading) return <AccordionSkeleton open={ false } count={ 15 }/>
  return (
    <Accordion className="accordionViewer">
      { placeholderData.map((item) => {
          const props = accordionItemArgs(item);
          return <AccordionItem key={ props.key } props={ props } />
        }) }
    </Accordion>
  )
}
