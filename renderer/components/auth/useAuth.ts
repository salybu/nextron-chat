import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../lib/firebase';
import { userAuth } from '../../lib/type';

const useAuth = () => {
  const [user, setUser] = useState<userAuth>(null);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const signUp = async (): Promise<any> => {
    if (!Validation()) {
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(user.email, user.password);
      router.replace('/home');
    } catch (error) {
      signUpError(error);
    }
  };

  const signIn = async (): Promise<any> => {
    if (!Validation()) {
      return;
    }

    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      router.replace('/users');
    } catch (error) {
      signInError(error);
    }
    setLoading(false);
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
    } catch (error) {
      setErrorMessage('Something went wrong. Please try logging out again.');
      console.error(error);
    }
    setLoading(false);
  };

  const Validation = (): boolean => {
    if (!user.email) {
      setErrorMessage('fill in the email');
      return false;
    } else if (!user.password) {
      setErrorMessage('fill in the password');
      return false;
    }
    return true;
  };

  const signUpError = (error): void => {
    if (error.code === 'auth/weak-password') {
      setErrorMessage('That password is too weak. Please try a more secure password with at least 6 characters.');
    } else if (error.code === 'auth/invalid-email') {
      setErrorMessage("That email isn't valid. Please try a valid email address.");
    } else if (error.code === 'auth/operation-not-allowed') {
      setErrorMessage("Password log in hasn't been enabled. If you are dev, make sure to enable it in your Firebase Console.");
    } else if (error.code === 'auth/email-already-in-use') {
      setErrorMessage('That email is already in use.');
    } else {
      setErrorMessage('Something went wrong. Please try logging in again.');
    }
    console.error(error);
  };

  const signInError = (error): void => {
    if (error.code === 'auth/user-disabled') {
      setErrorMessage('That account has been disabled.');
    } else if (error.code === 'auth/user-not-found') {
      setErrorMessage('The email or password is incorrect.');
    } else if (error.code === 'auth/wrong-password') {
      setErrorMessage('The email or password is incorrect.');
    } else if (error.code === 'auth/invalid-email') {
      setErrorMessage("That email isn't valid. Please try a valid email address.");
    } else {
      setErrorMessage('Something went wrong. Please try logging in again.');
    }
    console.error(error);
  };

  return { user, loading, errorMessage, onChange, signUp, signIn, signOut };
};

export default useAuth;
