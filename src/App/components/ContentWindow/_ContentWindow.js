import React from 'react';

const DOM = {
  CARBON_COL: 'bx--col bx--offset-lg-1',
  COLUMN: 'mainContentCol',
  CONTENT: 'mainContentWindow'
};

const ContentWindowWrapper = React.forwardRef( ({ content }, ref) => {
  if (!content) return null
  return (
      <div className={ DOM.CONTENT } ref={ ref }>
        { content }
      </div>
  );
});

export default ContentWindowWrapper;
