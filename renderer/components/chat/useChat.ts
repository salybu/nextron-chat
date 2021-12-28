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
    setMyChatRooms();
  }, []);

  const setMyChatRooms = async () => {
    const myRooms = await ChatService.getMyChatRooms(loggedUser.id);
    setRooms(mapRooms(myRooms));
  };

  const mapRooms = (rooms: roomWithUID[]): ChatRoom[] => {
    return rooms.map((room) => {
      const members = room.members.map((member) => getUserById(member));
      return {
        ...room,
        members,
      };
    });
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

  const submitMessage = async (roomId, uid, messageTxt) => {
    const { message, error } = await ChatService.sendMessage(roomId, uid, messageTxt);
    const mapped = mapMessage(message);
    setMessages([...messages, mapped]);
  };

  return { rooms, messages, getAllMessage, submitMessage };
};

export default useChat;
