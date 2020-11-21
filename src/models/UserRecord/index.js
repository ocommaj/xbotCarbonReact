import reducer from './_reducers';

export default class UserRecord {
  constructor(cleanedInput={}) {
    Object.assign(this, cleanedInput)
  }

  static loginUser(authorizedUser, apolloHook) {
    const newUser = new UserRecord();
    const { login, errorCallback } = apolloHook;
    const input = reducer.apolloRequest(authorizedUser);
    login({ variables: { input } })
      .then(({ data }) => {
        const apolloResponse = data.loginUser.loggedInUser;
        const record = reducer.apolloResponse(apolloResponse);
        Object.assign(newUser, record)
      })
      .catch(( error ) => {
        errorCallback()
        return
      })
    return newUser
  }

}
