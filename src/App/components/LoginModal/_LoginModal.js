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
<<<<<<< HEAD
      primaryButtonText="Login"
      secondaryButtonText="Cancel"
      selectorPrimaryFocus="#loginModal_usernameInput"
    >
      <TextInput
        id="loginModal_usernameInput"
        placeholder="you@xaviermicronesia.org"
        labelText="Username"
        style={ {marginBottom: '.5rem'} }

=======
      preventCloseOnClickOutside={true}
      primaryButtonText="Login"
      secondaryButtonText="Cancel"
    >
      <TextInput
        placeholder="you@xaviermicronesia.org"
        labelText="Username"
        style={INPUT_STYLES}
>>>>>>> dev-branch
      />
      <TextInput.PasswordInput
        placeholder="Password"
        labelText="Password"
        tooltipPosition=''
<<<<<<< HEAD
=======
        style={INPUT_STYLES}
>>>>>>> dev-branch
      />
    </Modal>,
    document.getElementById('modalPortal')
  )
}
