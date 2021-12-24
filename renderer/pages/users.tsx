import { useEffect, useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Typography, Box } from '@material-ui/core';
import Link from '../components/Link';
import { UserInfo } from '../lib/type';
import { getAllUsers } from '../lib/user';
import UserItem from '../components/user/UserItem';
import { withProtected } from '../lib/routes';

const Users: NextPage = () => {
  const [users, setUsers] = useState<UserInfo[]>();

  useEffect(() => {
    (async () => {
      const allUsers: UserInfo[] = await getAllUsers();
      setUsers(allUsers);
    })();
  }, []);

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
        <Typography gutterBottom>
          <Link href='/home'>Go to the Home page</Link>
        </Typography>
      </main>
    </>
  );
};

export default withProtected(Users);
