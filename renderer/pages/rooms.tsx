import Head from 'next/head';
import { Typography, Box } from '@material-ui/core';
import { withProtected } from '../lib/routes';
import type { NextPage } from 'next';

const Rooms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextron Chat - Rooms</title>
      </Head>
      <main>
        <Typography gutterBottom>채팅방 목록</Typography>
      </main>
    </>
  );
};

export default withProtected(Rooms);
