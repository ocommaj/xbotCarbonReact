import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, TextInput } from 'carbon-components-react';

export default function LoginModal(props) {
  const { isShowing, setIsShowing } = props;

  if ( !isShowing ) { return null }

  return ReactDOM.createPortal(
    <Modal
      open={ isShowing }
      onRequestClose={ () => setIsShowing(false) }
      modalHeading="Login with @xaviermicronesia.org"
      hasForm={true}
      primaryButtonText="Login"
      secondaryButtonText="Cancel"
      selectorPrimaryFocus="#loginModal_usernameInput"
    >
      <TextInput
        id="loginModal_usernameInput"
        placeholder="you@xaviermicronesia.org"
        labelText="Username"
        style={ {marginBottom: '.5rem'} }

      />
      <TextInput.PasswordInput
        placeholder="Password"
        labelText="Password"
        tooltipPosition=''
      />
    </Modal>,
    document.getElementById('modalPortal')
  )
}
