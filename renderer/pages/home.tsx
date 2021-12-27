import React from 'react';
import Head from 'next/head';
import { Typography } from '@material-ui/core';
import Link from '../components/Link';
import SignInComponent from '../components/auth/SignIn';
import { withPublic } from '../lib/routes';
import { useAlignCenter } from '../lib/styles';

const Login = (): JSX.Element => {
  const classes = useAlignCenter();

  return (
    <>
      <Head>
        <title>Nextron Chat - Login</title>
      </Head>
      <main className={classes.root}>
        <Typography variant='h4' style={{ paddingBottom: 30 }}>
          Nextron Chat
        </Typography>
        <SignInComponent />
        <Typography gutterBottom>
          <Link href='/signUp'>Go to Sign Up page</Link>
        </Typography>
      </main>
    </>
  );
};

export default withPublic(Login);
