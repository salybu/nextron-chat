import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('firebase init success');
}

const auth = firebase.auth();

export { auth, firebase };
