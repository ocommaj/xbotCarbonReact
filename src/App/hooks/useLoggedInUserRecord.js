import { useMutation, gql } from '@apollo/client';
import { userRecord } from '@Models';

export default function useLoggedInUserRecord(authorizedUser) {
  const LOGIN_USER = gql`
    mutation ($input: LoginInput) {
      loginUser(input: $input) {
        successStatus
        message
        loggedInUser {
          _id
          atXavierAccount
          isEditor
        }
      }
    }
  `

  const [login, { loading, error }] = useMutation(LOGIN_USER)
  if (loading) { console.log(loading) }
  if (error) { console.log('errory hook') }

  const input = !!authorizedUser
                  ? { atXavierAccount: authorizedUser.email,
                      verifiedEmail: authorizedUser.email_verified
                    }
                  : null

  if (input) {
    login({ variables: { input } })
      .then(({ data }) => console.dir( data.loginUser.loggedInUser ))
    }

}
