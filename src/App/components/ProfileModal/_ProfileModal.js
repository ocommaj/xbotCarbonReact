import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  TextInput
 } from 'carbon-components-react';
import { useUserUpdateMutation } from '@hooks/ApolloClient';

export default function ProfileModal({ props }) {
  const {
    activeUser,
    modalState,
    logout
  } = props;
  const [ mutate, error ] = useUserUpdateMutation();
  const [, setRerender] = useState(false);
  const updateInput = useRef({});

  if ( !modalState.isOpen || !activeUser ) { return null }

  return ReactDOM.createPortal(
    <>
    <ComposedModal
      open={ modalState.isOpen }
      onClose={ () => modalState.setOpen(false) }
      preventCloseOnClickOutside={ true }>
      <ModalHeader>
        {  activeUser ? activeUser.profile.fullName : 'Profile' }
      </ModalHeader>
      <ModalBody>
        <TextInput
          id={ `activeUserFirstNameInput` }
          labelText={ 'First Name' }
          placeholder={ !activeUser.profile.firstName ? 'First Name' : null }
          defaultValue={ activeUser.profile.firstName || null }
          onChange={ (e) => updateInput.current.firstName=e.target.value }
        />
        <TextInput
          id={ `activeUserFamilyNameInput` }
          labelText={ 'Family Name' }
          placeholder={ !activeUser.profile.familyName ? 'Family Name' : null}
          defaultValue={ activeUser.profile.familyName || null }
          onChange={ (e) => updateInput.current.familyName=e.target.value }
        />
      </ModalBody>
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
      activeUser.authorize().then( (headers) => {
        activeUser.updateRecord({mutate, error}, updateInput.current, headers)
          .then( () => setRerender(prevState => !prevState) )
          .catch((error) => console.error(error))
      })
  }
}
