import Head from 'next/head';
import type { NextPage } from 'next';
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
        {users?.map((user) => (
          <UserItem key={user.id} user={user} padding={1.5} />
        ))}
      </main>
    </>
  );
};

export default withProtected(Users);
