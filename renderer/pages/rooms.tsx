import Head from 'next/head';
import type { NextPage } from 'next';
import { withProtected } from '../lib/routes';
import useChat from '../components/chat/useChat';
import ChatRoom from '../components/chat/ChatRoom';

const Rooms: NextPage = () => {
  const { rooms } = useChat();

  return (
    <>
      <Head>
        <title>Nextron Chat - Rooms</title>
      </Head>
      <main>
        {rooms?.map((room) => (
          <ChatRoom room={room} />
        ))}
      </main>
    </>
  );
};

export default withProtected(Rooms);
