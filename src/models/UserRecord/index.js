import reducer from './_reducers';

export default class UserRecord {
  constructor(getToken, cleanedInput={}) {
    getToken().then(res => this.token = res);
    this.getToken = () => getToken();
    Object.assign(this, cleanedInput);
  };

  static loginUser({ authorizedUser, getToken, apolloHook }) {
    const { login, errorCallback } = apolloHook;
    try {
      const newUser = new UserRecord(getToken);
      const input = reducer.apolloRequest(authorizedUser);
      login({ variables: { input } })
        .then(({ data }) => {
          const apolloResponse = data.loginUser.loggedInUser;
          const record = reducer.apolloResponse(apolloResponse);
          Object.assign(newUser, record)
        })
      return newUser
    } catch(error) {
        errorCallback()
        return
      };
  };

  updateRecord(apolloHook, updateInput) {
    const { mutate } = apolloHook;
    const input = reducer.updateUserInfo(this, updateInput);

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
        });
    });
  };

};
