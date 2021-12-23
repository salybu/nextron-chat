import { useEffect, useState } from 'react';
import Head from 'next/head';
import Img from 'next/image';
import type { NextPage } from 'next';
import { Typography, Box } from '@material-ui/core';
import Link from '../components/Link';
import { User } from '../lib/type';
import { getAllUsers } from '../lib/user';

const Users: NextPage = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    (async () => {
      const allUsers: User[] = await getAllUsers();
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
          <Link href='/chat/[id]' as={`/chat/${user.id}`}>
            <Box sx={{ flexGrow: 1, display: 'flex', padding: 15 }}>
              <Img src={user.profilePic} width='100' height='100'></Img>
              <Box sx={{ padding: 10 }}>
                <Typography>{user.name}</Typography>
                <Typography gutterBottom>{user.email}</Typography>
              </Box>
            </Box>
          </Link>
        ))}
        <Typography gutterBottom>
          <Link href='/home'>Go to the Home page</Link>
        </Typography>
      </main>
    </>
  );
};

export default Users;
