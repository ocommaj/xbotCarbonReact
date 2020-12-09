import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSkeleton } from 'carbon-components-react';
import AccordionItem from './_AccordionItem';
import { useArticlesQuery } from '@hooks/ApolloClient';

export default function AccordionViewer({ props }) {
  const { activeSection: { apolloQuery } } = props;
  const query = {
    input: { ...apolloQuery.input, pageSize: 20 },
    pattern: apolloQuery.pattern
  };

  const { queryResponse } = useArticlesQuery(query);
  const [items, setItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const getProps = (item) => accordionItemProps(item);

  useEffect(() => {
    if (!queryResponse) return
    const { articles } = queryResponse.tutorials;
    setItems(prevState => [...prevState, ...articles])
  }, [queryResponse]);

  useEffect(() => console.dir(items), [items])

  if (!items.length) return <AccordionSkeleton open={ false } count={ 15 }/>
  return (
    <Accordion className="accordionViewer">
      { items.map((item) => {
          const props = getProps(item);
          return <AccordionItem key={ props.key } props={ props } />
        }) }
    </Accordion>
  )

  function accordionItemProps(item) {
    const key = `accordionItem_${item._id}`;
    return {
      item,
      key,
      setExpandedItem,
      isOpen: key === expandedItem,
    }
  };
}
