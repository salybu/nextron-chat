import Head from 'next/head';
import type { NextPage } from 'next';
import { withProtected } from '../lib/routes';
import useUser from '../components/user/useUser';
import UserWithChat from '../components/user/UserwithChat';

const Users: NextPage = () => {
  const { users } = useUser();

  return (
    <>
      <Head>
        <title>Nextron Chat - Users</title>
      </Head>
      <main>
        {users?.map((user) => (
          <UserWithChat key={user.id} user={user} />
        ))}
      </main>
    </>
  );
};

export default withProtected(Users);
