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
      <main>{rooms?.length == 0 ? <h2 style={{ textAlign: 'center' }}>no rooms here</h2> : rooms?.map((room) => <ChatRoom key={room.id} room={room} />)}</main>
    </>
  );
};

export default withProtected(Rooms);
