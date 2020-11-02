import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, TextInput } from 'carbon-components-react';

export default function LoginModal(props) {
  const { isShowing, setIsShowing } = props;

  if ( !isShowing ) { return null }

  const INPUT_STYLES = {
    margin: '.5rem 0'
  }

  return ReactDOM.createPortal(
    <Modal
      open={ isShowing }
      onRequestClose={ () => setIsShowing(false) }
      modalHeading="Login with @xaviermicronesia.org"
      hasForm={true}
      preventCloseOnClickOutside={true}
      primaryButtonText="Login"
      secondaryButtonText="Cancel"
    >
      <TextInput
        placeholder="you@xaviermicronesia.org"
        labelText="Username"
        style={INPUT_STYLES}
      />
      <TextInput.PasswordInput
        placeholder="Password"
        labelText="Password"
        tooltipPosition=''
        style={INPUT_STYLES}
      />
    </Modal>,
    document.getElementById('modalPortal')
  )
}
