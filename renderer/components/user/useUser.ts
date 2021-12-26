import { useEffect } from 'react';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { UserInfo } from '../../lib/type';
import { callAllUsers } from '../../lib/firebase';
import useAuth from '../../lib/context/auth';
import useUserContext from '../../lib/context/users';

const useUser = () => {
  const { loggedUser } = useAuth();
  const { users, allUsers, setUsers, setAllUsers } = useUserContext();

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = (user: UserRecord): UserInfo => {
    const { uid, email, displayName, photoURL } = user;
    return {
      id: uid,
      email,
      name: displayName,
      profilePic: photoURL ? photoURL : 'https://mui.com/static/images/avatar/1.jpg',
    };
  };

  const getUserById = (id: string): UserInfo => {
    return allUsers.filter((user) => user.id === id)[0];
  };

  const getUsers = async () => {
    let userArr: UserInfo[] = [];
    const AllUsers: UserRecord[] = await callAllUsers();
    AllUsers.forEach((user) => {
      userArr.push(mapUser(user));
    });
    setAllUsers(userArr);
    const otherUsers = userArr.filter((user) => user.id !== loggedUser.id);
    setUsers(otherUsers);
  };

  return { users, getUserById };
};

export default useUser;
