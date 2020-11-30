import React from 'react';

export default function ContentWindow({ content }) {
  return (
    <div className="bx--col bx--offset-lg-1 mainContentCol">
      <div className="mainContentWindow">
        { content }
      </div>
    </div>
  );
};
