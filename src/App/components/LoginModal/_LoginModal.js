import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'carbon-components-react';

export default function LoginModal(props) {
  const { isShowing, setIsShowing } = props;

  if ( !isShowing ) { return null }

  return ReactDOM.createPortal(
    <Modal
      open={ isShowing }
      onRequestClose={ () => setIsShowing(false) }
      modalHeading="In header"
      primaryButtonText="Login"
      secondaryButtonText="Cancel"
    />,
    document.getElementById('modalPortal')
  )
}
