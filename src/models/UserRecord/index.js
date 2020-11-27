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
    return newUser;
  }

  updateRecord(apolloHook) {
    const { mutate } = apolloHook;
    const input = {
      atXavierAccount: this.atXavierAccount,
      firstName: "Jim",
      familyName: this.familyName,
      fullName: this.fullName,
      goesBy: this.goesBy,
      isEditor: this.isEditor,
      lastLogin: this.lastLogin
    };

    return new Promise((resolve, reject) => {
      mutate({ variables: { input } })
        .then(({ data }) => {
          const response = reducer.apolloResponse(data.updateUser.updatedUser);
          for (const [key, value] of Object.entries(response)) {
            this[key] = value;
          }
          return resolve();
        })
        .catch((error) => {
          console.dir(error);
          return reject(error);
        })
    })
  }

}
