import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { callAllUsers } from './firebase';
import { UserInfo } from './type';

export const mapUser = (user: UserRecord): UserInfo => {
  const { uid, email, displayName, photoURL } = user;
  return {
    id: uid,
    email,
    name: displayName,
    profilePic: photoURL ? photoURL : 'https://mui.com/static/images/avatar/1.jpg',
  };
};

export const getAllUsers = async () => {
  let userArr: UserInfo[] = [];
  const allUsers: UserRecord[] = await callAllUsers();
  allUsers.forEach((user) => {
    userArr.push(mapUser(user));
  });
  return userArr;
};
