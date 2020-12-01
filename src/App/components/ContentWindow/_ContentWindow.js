import React from 'react';

const DOM = {
  CARBON_COL: 'bx--col bx--offset-lg-1',
  COLUMN: 'mainContentCol',
  CONTENT: 'mainContentWindow'
};

const ContentWindowWrapper = React.forwardRef( ({ content }, ref) => {
  return (
    <div className={ `${DOM.CARBON_COL} ${DOM.COLUMN}` }>
      <div className={ DOM.CONTENT } ref={ ref }>
        { content }
      </div>
    </div>
  );
});

export default ContentWindowWrapper;
