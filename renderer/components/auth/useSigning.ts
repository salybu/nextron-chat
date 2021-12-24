import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/dist/client/router';
import useAuth from '../../lib/auth';
import { AuthService } from '../../lib/api/AuthService';
import { mapUser } from '../../lib/user';
import { userAuth } from '../../lib/type';

const useSigning = () => {
  const router = useRouter();
  const { loggedUser, setLoggedUser } = useAuth();

  const [userForm, setUserForm] = useState<userAuth>(null);
  const [errorMessage, setErrorMessage] = useState<string>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setUserForm({ ...userForm, [id]: value });
  };

  const signUp = async (): Promise<any> => {
    if (!Validation()) {
      return;
    }

    const { error } = await AuthService.signUp(userForm);
    if (error) {
      signUpError(error);
    } else {
      router.replace('/home');
    }
  };

  const signIn = async (): Promise<any> => {
    if (!Validation()) {
      return;
    }

    const { user, error } = await AuthService.login(userForm);
    if (error) {
      signInError(error);
    } else if (!error && user) {
      setLoggedUser(mapUser(user));
      router.replace('/users');
    }
  };

  const signOut = async () => {
    const { error } = await AuthService.logout();
    if (error) {
      setErrorMessage('Something went wrong. Please try logging out again.');
      console.error(error);
    } else {
      setLoggedUser(null);
    }
  };

  const Validation = (): boolean => {
    if (!userForm.email) {
      setErrorMessage('fill in the email');
      return false;
    } else if (!userForm.password) {
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

  return { userForm, loading, errorMessage, onChange, signUp, signIn, signOut };
};

export default useSigning;
