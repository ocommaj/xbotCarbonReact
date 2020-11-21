export default class UserRecord {
  constructor(cleanedInput={}) {
    Object.assign(this, cleanedInput)
  }

  static loginUser(authorizedUser, apolloHook) {
    const newUser = new UserRecord();
    const { login, errorCallback } = apolloHook;
    const input = this.apolloRequestReducer(authorizedUser);
    login({ variables: { input } })
      .then(({ data }) => {
        const apolloResponse = data.loginUser.loggedInUser;
        const record = this.apolloResponseReducer(apolloResponse);
        Object.assign(newUser, record)
      })
      .catch(( error ) => {
        console.log('errory!')
        errorCallback()
      })
    return newUser
  }

  static apolloRequestReducer(auth0userRecord) {
    return {
      atXavierAccount: auth0userRecord.email,
      verifiedEmail: auth0userRecord.email_verified,
      user: {
        atXavierAccount: auth0userRecord.email,
        firstName: auth0userRecord.given_name,
        familyName: auth0userRecord.family_name,
        fullName: auth0userRecord.name,
        goesBy: auth0userRecord.nickname || '',
      }
    }
  }

  static apolloResponseReducer(apolloUserRecord) {
    return {
      atXavierAccount: apolloUserRecord.atXavierAccount,
      firstName: apolloUserRecord.firstName,
      familyName: apolloUserRecord.familyName,
      fullName: `${apolloUserRecord.firstName} ${apolloUserRecord.familyName}`,
      goesBy: apolloUserRecord.goesBy || '',
      isEditor: apolloUserRecord.isEditor
    }
  }
}
