import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
 } from 'carbon-components-react';
import { useUserUpdateMutation } from '@hooks';

export default function ProfileModal({ props }) {
  const {
    activeUser,
    modalState,
    logout
  } = props;
  const [ mutate, error ] = useUserUpdateMutation();
  const [rerender, setRerender] = useState(false)
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    if (activeUser) {
      setDisplayName(activeUser.fullName)
    }
  }, [activeUser, modalState.isOpen, rerender])

  if ( !modalState.isOpen ) { return null }

  return ReactDOM.createPortal(
    <>
    <ComposedModal
      open={ modalState.isOpen }
      onClose={ () => modalState.setOpen(false) }
      preventCloseOnClickOutside={ true }>
      <ModalHeader>
        {  displayName ? displayName : 'Profile' }
      </ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter>
        <Button
          kind="secondary"
          onClick={ () => logout() }>
          Logout
        </Button>
        <Button
          kind="primary"
          onClick={ () => updateUserClickHandler() }>
          Edit Profile
        </Button>
      </ModalFooter>
    </ComposedModal>
    </>,
    document.getElementById('modalPortal')
  )

  function updateUserClickHandler(input) {
    if (!activeUser) return
      activeUser.updateRecord({mutate, error})
            .then(() => setRerender(prevState => !prevState) )
            .catch((error) => console.dir(error))
  }
}
