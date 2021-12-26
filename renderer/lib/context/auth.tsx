import { useRouter } from 'next/dist/client/router';
import { Context, createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from '../api/AuthService';
import { UserInfo } from '../type';

const authContext: Context<any> = createContext<any>('');

export default function useAuth() {
  return useContext(authContext);
}

export const AuthProvider = (props: any) => {
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState<UserInfo>(null);

  const logout = async () => {
    const { error } = await AuthService.logout();
    setLoggedUser(null);
  };

  const value = { loggedUser, setLoggedUser, logout };

  return <authContext.Provider value={value} {...props} />;
};
