import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@material-ui/core';
import Link from '../components/Link';
import { withProtected } from '../lib/routes';
import useAuth from '../lib/context/auth';
import useChat from '../components/chat/useChat';
import ChatIcon from '@material-ui/icons/Chat';

const Rooms: NextPage = () => {
  const { loggedUser } = useAuth();
  const { rooms } = useChat();

  return (
    <>
      <Head>
        <title>Nextron Chat - Rooms</title>
      </Head>
      <main>
        {rooms?.map((room) => (
          <Link href='/room/[id]' as={`/room/${room.id}`}>
            <Box sx={{ display: 'flex', padding: 15, border: 'solid 1px black' }}>
              <ChatIcon />
              {room.members.map((member) => (
                <div>{member.id !== loggedUser.id && <>{member.email + ', '}</>}</div>
              ))}
            </Box>
          </Link>
        ))}
      </main>
    </>
  );
};

export default withProtected(Rooms);
