import { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import { ChatService } from '../../lib/api/ChatService';
import useAuth from '../../lib/context/auth';
import useUser from '../user/useUser';
import { ChatRoom, roomWithUID } from '../../lib/type';

const useChat = () => {
  const { loggedUser } = useAuth();
  const { getUserById } = useUser();

  const [rooms, setRooms] = useState<ChatRoom[]>();

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

  return { rooms };
};

export default useChat;
