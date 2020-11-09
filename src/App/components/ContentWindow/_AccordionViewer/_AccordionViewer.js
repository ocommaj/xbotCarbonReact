import React from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import placeholderData from './_placeholderData';

export default function AccordionViewer({ props }) {
  const { content } = props;

  return (
    <div>
      { content && content.defaultStr }
    </div>
  )
}
