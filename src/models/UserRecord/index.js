import reducer from './_reducers';

export default class UserRecord {
  constructor(getToken, rawInput={}, apolloHook={}) {
    this.getToken = () => getToken();

    this.authorize().then((headers) => {
      this.profile = _dbLogin(headers, rawInput, apolloHook)
    });

      function _dbLogin(headers, rawInput, { login, errorCallback }) {
        const userData = {};
        const input = reducer.apolloRequest(rawInput);
        try {
          login({ variables: { input }, context: { headers } })
            .then(({ data }) => {
              const apolloResponse = data.loginUser.loggedInUser;
              const cleanInput = reducer.apolloResponse(apolloResponse);
              Object.assign(userData, cleanInput)
            })
          return userData;
        } catch(error) { errorCallback() }
      };
  };

  static login({ authorizedUser, getToken, apolloHook }) {
    return new UserRecord(getToken, authorizedUser, apolloHook)
  };

  authorize() {
    return new Promise(( resolve ) => {
      this.getToken().then(res => {
        const headers = { authorization: res ? `Bearer ${res}` : ''}
        return resolve(headers)
      })
    })
  };

  updateRecord(apolloHook, updateInput, headers={}) {
    const { mutate } = apolloHook;
    const { input } = reducer.updateUserInfo(this.profile, updateInput);

    return new Promise((resolve, reject) => {
      mutate({ variables: { input }, context: { headers } })
        .then(({ data }) => {
          const response = reducer.apolloResponse(data.updateUser.updatedUser);
          for (const [key, value] of Object.entries(response)) {
            this.profile[key] = value;
          }
          return resolve();
        })
        .catch(error => {
          console.dir(error);
          return reject(error);
        });
    });
  };

};
