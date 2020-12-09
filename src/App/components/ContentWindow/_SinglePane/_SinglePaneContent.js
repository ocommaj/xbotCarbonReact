import React from 'react';
import Headline from '@components/Headline';

export default function SinglePaneContent({ props: { activeSection } }) {
  const { content: { defaultStr: title } } = activeSection;

  return <Headline text={title} />
  
};
