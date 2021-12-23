import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { callAllUsers } from './firebase';
import { User } from './type';

export const mapUser = (user: UserRecord): User => {
  const { uid, email, displayName, photoURL } = user;
  return {
    id: uid,
    email,
    name: displayName,
    profilePic: photoURL ? photoURL : 'https://mui.com/static/images/avatar/1.jpg',
  };
};

export const getAllUsers = async () => {
  let userArr: User[] = [];
  const allUsers: UserRecord[] = await callAllUsers();
  allUsers.forEach((user) => {
    userArr.push(mapUser(user));
  });
  return userArr;
};
