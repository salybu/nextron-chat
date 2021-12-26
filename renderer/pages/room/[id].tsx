import type { NextPage } from 'next';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { withProtected } from '../../lib/routes';

const Room: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Nextron Chat - Chatting Room with {id}</title>
      </Head>
      <Typography gutterBottom>채팅방</Typography>
    </>
  );
};

export default withProtected(Room);
