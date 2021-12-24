import type { NextPage } from 'next';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import SignUpComponent from '../components/auth/SignUp';
import { withPublic } from '../lib/routes';

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextron Chat - Sign Up</title>
      </Head>
      <main>
        <SignUpComponent />
        <Typography gutterBottom>
          <Link href='/home'>Go to the Home page</Link>
        </Typography>
      </main>
    </>
  );
};

export default withPublic(SignUp);
