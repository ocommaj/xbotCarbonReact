import React from 'react';
import ReactDOM from 'react-dom';
import { ToastNotification, InlineNotification } from 'carbon-components-react';

export default function ToastAlert(props) {
  const { trigger, alertData: { kind, title, subtitle='' } } = props;
  if (!trigger) return null
  return ReactDOM.createPortal(
    <InlineNotification
      kind={ kind }
      title={ title }
      subtitle={ subtitle }
      hideCloseButton={ true }
    />,
    document.getElementById('alertPortal')
  )
}
