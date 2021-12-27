import type { NextPage } from 'next';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import SignUpComponent from '../components/auth/SignUp';
import { withPublic } from '../lib/routes';
import { useAlignCenter } from '../lib/styles';

const SignUp: NextPage = () => {
  const classes = useAlignCenter();

  return (
    <>
      <Head>
        <title>Nextron Chat - Sign Up</title>
      </Head>
      <main className={classes.root}>
        <Typography variant='h4' style={{ paddingBottom: 30 }}>
          Sign Up
        </Typography>
        <SignUpComponent />
        <Typography gutterBottom>
          <Link href='/home'>Go to Home page</Link>
        </Typography>
      </main>
    </>
  );
};

export default withPublic(SignUp);
