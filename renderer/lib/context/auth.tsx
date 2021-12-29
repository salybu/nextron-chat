import { useRouter } from 'next/dist/client/router';
import { Context, createContext, useContext, useState } from 'react';
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

  const goHome = () => router.replace('/home');
  const goUsers = () => router.replace('/users');

  const value = { loggedUser, setLoggedUser, logout, goHome, goUsers };

  return <authContext.Provider value={value} {...props} />;
};
