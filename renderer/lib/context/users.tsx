import { Context, createContext, useContext, useState } from 'react';
import { UserInfo } from '../type';

const userContext: Context<any> = createContext<any>('');

export default function useUserContext() {
  return useContext(userContext);
}

export const UserContextProvider = (props: any) => {
  const [users, setUsers] = useState<UserInfo>(null);

  const value = { users, setUsers };

  return <userContext.Provider value={value} {...props} />;
};
