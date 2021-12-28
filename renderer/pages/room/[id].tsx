import Head from 'next/head';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { FormEvent, useEffect, useRef, useState } from 'react';
import useAuth from '../../lib/context/auth';
import useChat from '../../components/chat/useChat';
import ChatMessage from '../../components/chat/ChatMessage';
import { withProtected } from '../../lib/routes';
import ChatInput from '../../components/chat/ChatInput';

const Room: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { loggedUser } = useAuth();
  const { messages, getAllMessage, submitMessage } = useChat();

  const [input, setInput] = useState<string>();

  const bottom = useRef<HTMLSpanElement>();

  useEffect(() => {
    (async () => {
      await getAllMessage(id as string);
    })();
  }, []);

  useEffect(() => {
    bottom?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMessage(id as string, loggedUser.id, input);
    setInput('');
  };

  return (
    <>
      <Head>
        <title>Nextron Chat - Chatting Room with {id}</title>
      </Head>
      <main>
        {messages?.length == 0 ? (
          <h2 style={{ textAlign: 'center' }}>no message here</h2>
        ) : (
          messages?.map((message, idx) => <ChatMessage key={idx} message={message} isSent={message.sentBy.id === loggedUser.id}></ChatMessage>)
        )}
      </main>
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
      <span ref={bottom}></span>
    </>
  );
};

export default withProtected(Room);
