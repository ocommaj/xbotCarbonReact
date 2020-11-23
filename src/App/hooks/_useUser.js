import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserRecord } from '@Models';
import { useLoggedInUserRecord } from '@hooks';

export default function useUser() {
  const { user: authUser, logout } = useAuth0();
  const [ activeUser, setActiveUser ] = useState(null);
  const [ login ] = useLoggedInUserRecord();

  useEffect(() => {
    if (authUser) {
      const apolloHook = { login, errorCallback: logout };
      const user = UserRecord.loginUser(authUser, apolloHook);
      setActiveUser(user);
    }
  }, [authUser, login, logout]);

  return activeUser;
}
