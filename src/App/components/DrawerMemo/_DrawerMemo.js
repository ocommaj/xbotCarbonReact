import React from 'react';

const DOM = {
  WRAPPER: "drawerMemo",
  IFRAME: "memoPreviewFrame"
}

export default function DrawerMemo(props) {
  const { record } = props;
  return (
    <div className={ DOM.WRAPPER }>
      Drawer Memo
    </div>
  )
}
