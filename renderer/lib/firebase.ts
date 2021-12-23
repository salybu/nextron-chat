import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import * as admin from 'firebase-admin';

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('firebase init success');
}

const auth = firebase.auth();

// firebase-admin
const firebasePrivateKey = 'xxx';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({}),
    databaseURL: 'xxx',
  });
}

const adminAuth = admin.auth();

export const callAllUsers = async () => {
  const maxResults = 100; // optional arg.

  const userRecords = await adminAuth.listUsers(maxResults);
  return userRecords.users;
};

export { auth, firebase };
