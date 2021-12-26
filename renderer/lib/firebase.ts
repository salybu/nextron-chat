import dotenv from 'dotenv';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // 없으면 const firestore = firebase.firestore(); 부분 error
import 'firebase/compat/auth';

import * as admin from 'firebase-admin';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('firebase init success');
}

const auth = firebase.auth();

// firebase-admin
const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

const adminAuth = admin.auth();

export const callAllUsers = async () => {
  const maxResults = 100; // optional arg.

  const userRecords = await adminAuth.listUsers(maxResults);
  return userRecords.users;
};

// firestore
const firestore = firebase.firestore();

export default firestore;
export { auth, firebase };
