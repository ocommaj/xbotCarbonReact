import React from 'react';

const DOM = {
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
