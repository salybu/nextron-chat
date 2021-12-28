import router from 'next/router';
import { IUser } from '../../lib/type';
import { ChatService } from '../../lib/api/ChatService';
import useAuth from '../../lib/context/auth';
import { useEffect, useState } from 'react';
import Link from '../Link';
import UserItem from './UserItem';
import { StyledButton } from '../../lib/styles';

const UserWithChat: React.FC<IUser> = ({ user }): JSX.Element => {
  const { loggedUser } = useAuth();
  const [isRoom, setIsRoom] = useState<string>('');

  useEffect(() => {
    getRoomId();
  });

  const getRoomId = async () => {
    const roomId = await ChatService.getPrivateChatRoom(loggedUser.id, user.id);
    setIsRoom(roomId);
  };

  const createChatRoom = async () => {
    const memberArr = [loggedUser.id, user.id];
    const { id, error } = await ChatService.createChatRoom(memberArr);
    router.push(`/room/${id}`);
  };

  const privateChatContent: JSX.Element = isRoom ? (
    <Link href='/room/[id]' as={`/room/${isRoom}`}>
      Go to the Private ChatRoom
    </Link>
  ) : (
    <div style={{ margin: 'auto' }}>
      <StyledButton onClick={createChatRoom} style={{ fontSize: 10 }}>
        Make a Private ChatRoom
      </StyledButton>
    </div>
  );

  return <UserItem user={user} padding={1.5} children={privateChatContent} />;
};

export default UserWithChat;
