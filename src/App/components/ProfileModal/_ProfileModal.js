import React from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
 } from 'carbon-components-react';

export default function ProfileModal(props) {
  const { user, logout, profileModalOpen, setProfileModalOpen } = props;

  if ( !profileModalOpen ) { return null }

  return ReactDOM.createPortal(
    <>
    <ComposedModal
      open={ profileModalOpen }
      onClose={ () => setProfileModalOpen(false) }>
      <ModalHeader>
        { !!user ? user.name : 'Profile' }
      </ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter>
        <Button
          kind="secondary"
          onClick={ () => logout() }>
          Logout
        </Button>
        <Button kind="primary">
          Edit Profile
        </Button>
      </ModalFooter>
    </ComposedModal>
    </>,
    document.getElementById('modalPortal')
  )
}
