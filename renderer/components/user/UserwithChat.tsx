import { IUser } from '../../lib/type';
import { ChatService } from '../../lib/api/ChatService';
import useAuth from '../../lib/context/auth';
import { useEffect, useState } from 'react';
import Link from '../Link';
import UserItem from './UserItem';

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

  const privateChatContent: JSX.Element = isRoom ? (
    <Link href='/room/[id]' as={`/room/${isRoom}`}>
      Go to the Private ChatRoom
    </Link>
  ) : (
    <div>none</div>
  );

  return <UserItem user={user} padding={1.5} children={privateChatContent} />;
};

export default UserWithChat;
