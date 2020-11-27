const reducers = {
  apolloRequest: (auth0userRecord) => {
    return {
      atXavierAccount: auth0userRecord.email,
      verifiedEmail: auth0userRecord.email_verified,
      user: {
        atXavierAccount: auth0userRecord.email,
        firstName: auth0userRecord.given_name,
        familyName: auth0userRecord.family_name,
        fullName: auth0userRecord.name,
        goesBy: auth0userRecord.nickname || '',
        lastLogin: new Date()
      }
    }
  },
  apolloResponse: (apolloUserRecord) => {
    return {
      _id: apolloUserRecord._id,
      atXavierAccount: apolloUserRecord.atXavierAccount,
      firstName: apolloUserRecord.firstName,
      familyName: apolloUserRecord.familyName,
      fullName: `${apolloUserRecord.firstName} ${apolloUserRecord.familyName}`,
      goesBy: apolloUserRecord.goesBy || '',
      isEditor: apolloUserRecord.isEditor,
      lastLogin: new Date().toUTCString(apolloUserRecord.lastLogin)
    }
  }
}

export default reducers
