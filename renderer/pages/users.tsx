import Head from 'next/head';
import type { NextPage } from 'next';
import { Typography } from '@material-ui/core';
import UserItem from '../components/user/UserItem';
import { withProtected } from '../lib/routes';
import useUser from '../components/user/useUser';

const Users: NextPage = () => {
  const { users } = useUser();

  return (
    <>
      <Head>
        <title>Nextron Chat - Users</title>
      </Head>
      <main>
        <Typography gutterBottom>유저목록</Typography>
        {users?.map((user) => (
          <UserItem user={user} />
        ))}
      </main>
    </>
  );
};

export default withProtected(Users);
