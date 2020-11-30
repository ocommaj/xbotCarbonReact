import React from 'react';
import Headline from '@components/Headline';

export default function SinglePaneContent( { props } ) {
  const { activeSection: { content: { defaultStr: title } } } = props;

  return (
    <div>
      <Headline text={title} />
    </div>
  );
};
