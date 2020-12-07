import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserRecord } from '@Models';
import { useLoggedInUserRecord } from '@hooks/ApolloClient';

export default function useUser() {
  const { logout, getAccessTokenSilently, user: authUser } = useAuth0();
  const [ activeUser, setActiveUser ] = useState(null);
  const [ login ] = useLoggedInUserRecord();

  useEffect(() => {
    if (authUser) {
      const errorCallback = () => logout({ returnTo: window.location.origin });
      const user = UserRecord.login({
        authorizedUser: authUser,
        apolloHook: { login, errorCallback },
        getToken: getAccessTokenSilently,
      });

      setActiveUser(user);
    }
  }, [authUser, getAccessTokenSilently, login, logout]);

  return activeUser;
}
