import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import useAuth from '../../lib/context/auth';
import useChat from '../../components/chat/useChat';
import ChatMessage from '../../components/chat/ChatMessage';
import { withProtected } from '../../lib/routes';

const Room: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { loggedUser } = useAuth();
  const { messages, getAllMessage } = useChat();

  useEffect(() => {
    (async () => {
      await getAllMessage(id as string);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Nextron Chat - Chatting Room with {id}</title>
      </Head>
      <main>
        {messages?.map((message) => (
          <ChatMessage message={message} isSent={message.sentBy.id === loggedUser.id}></ChatMessage>
        ))}
      </main>
    </>
  );
};

export default withProtected(Room);
