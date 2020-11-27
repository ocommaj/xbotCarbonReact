import { useMutation, gql } from '@apollo/client';

export default function useUserUpdateMutation() {
  const UPDATE_USER = gql`
    mutation ($input: UserInput) {
      updateUser(input: $input) {
        successStatus
        message
        updatedUser {
          _id
          atXavierAccount
          firstName
          familyName
          fullName
          goesBy
          isEditor
          lastLogin
        }
      }
    }
  `

  const [mutate, {error}] = useMutation(UPDATE_USER)
  return [mutate, error] 
}
