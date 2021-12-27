import { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import { ChatService } from '../../lib/api/ChatService';
import useAuth from '../../lib/context/auth';
import useUser from '../user/useUser';
import { ChatMessage, ChatRoom, roomWithUID } from '../../lib/type';

const useChat = () => {
  const { loggedUser } = useAuth();
  const { getUserById } = useUser();

  const [rooms, setRooms] = useState<ChatRoom[]>();
  const [messages, setMessages] = useState<ChatMessage[]>();

  useEffect(() => {
    getMyChatRooms();
  }, []);

  const mapRoom = (room: firebase.firestore.DocumentData): roomWithUID => {
    return {
      id: room.id,
      members: room.members,
      type: room.type,
    };
  };

  const getMyChatRooms = async () => {
    let roomsArr = [];
    const allRooms: roomWithUID[] = await ChatService.getMyChatRoom();
    const filtered = allRooms.filter((room) => room.members.includes(loggedUser.id));

    filtered.forEach((room) => {
      roomsArr.push(mapRoom(room));
    });

    roomsArr.forEach((room) => {
      let members = [];
      room.members.forEach((id) => {
        members.push(getUserById(id));
      });
      room.members = members;
    });
    setRooms(roomsArr);
  };

  const getAllMessage = async (id: string) => {
    const result = await ChatService.getMessages(id);
    const mappedMessages = result.map((message) => mapMessage(message));
    setMessages(mappedMessages);
  };

  const mapMessage = (message: firebase.firestore.DocumentData): ChatMessage => {
    return {
      sentBy: getUserById(message.sentBy),
      sentAt: message.sentAt.toString(),
      messageText: message.messageText,
    };
  };

  return { rooms, messages, getAllMessage };
};

export default useChat;
