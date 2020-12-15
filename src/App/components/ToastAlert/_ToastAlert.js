import React from 'react';
import { ToastNotification } from 'carbon-components-react';

export default function ToastAlert(props) {
  const { alertData: { kind, title, subtitle='' } } = props;
  return (
    <ToastNotification
      kind={ kind }
      title={ title }
      subtitle={ subtitle }
      lowContrast={ true }
      hideCloseButton={ true }
    />
  )
}
