import Head from 'next/head';
import { useRouter } from 'next/router';
import Img from 'next/image';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import useAuth from '../../lib/context/auth';
import useChat from '../../components/chat/useChat';
import { withProtected } from '../../lib/routes';
import { Box, Typography } from '@material-ui/core';

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
          <>
            <Img src={message.sentBy.profilePic} width='50' height='50'></Img>
            <Box sx={{ padding: 10 }}>
              <Typography>{message.sentBy.email}</Typography>
              <Typography gutterBottom>{message.messageText}</Typography>
            </Box>
          </>
        ))}
      </main>
    </>
  );
};

export default withProtected(Room);
