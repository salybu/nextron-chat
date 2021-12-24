import firebase from 'firebase/compat';
import { auth } from '../firebase';
import { userAuth } from '../type';

export const AuthService = {
  login: async ({ email, password }: userAuth) => {
    try {
      const userCred: firebase.auth.UserCredential = await auth.signInWithEmailAndPassword(email, password);
      return {
        user: userCred.user,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error,
      };
    }
  },
  logout: async () => {
    try {
      await auth.signOut();
      return { error: null };
    } catch (error) {
      return { error };
    }
  },
  signUp: async ({ email, password }: userAuth) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      return { error: null };
    } catch (error) {
      return { error };
    }
  },
};
