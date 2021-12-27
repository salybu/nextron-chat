import { firebase } from '../firebase';
import firestore from '../../lib/firebase';

const roomRef = firestore.collection('groups');
const messageRef = firestore.collection('messagesss');

export const ChatService = {
  createChatRoom: async (members: string[]) => {
    try {
      const docRef = await roomRef.add({
        members,
        type: 1,
      });
      return {
        id: docRef.id,
        error: null,
      };
    } catch (error) {
      return {
        id: null,
        error,
      };
    }
  },
  getMyChatRoom: async () => {
    try {
      return await roomRef.get().then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          const { members, type } = doc.data();
          return { id: doc.id, members, type };
        });
      });
    } catch (error) {}
  },
  getMessages: async (roomId: string) => {
    try {
      return await messageRef
        .doc(roomId.trim())
        .collection('messages')
        .orderBy('sentAt')
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs.map((doc) => doc.data());
        });
    } catch (error) {}
  },
};
