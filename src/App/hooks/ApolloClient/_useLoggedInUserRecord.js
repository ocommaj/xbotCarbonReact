import { useMutation, gql } from '@apollo/client';

export default function useLoggedInUserRecord() {
  const LOGIN_USER = gql`
    mutation ($input: LoginInput) {
      loginUser(input: $input) {
        successStatus
        message
        loggedInUser {
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
  `;

  return useMutation(LOGIN_USER);
}
