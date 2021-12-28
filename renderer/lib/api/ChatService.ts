import { firebase } from '../firebase';
import firestore from '../../lib/firebase';

const roomRef = firestore.collection('groups');
const messageRef = firestore.collection('messages');

export const ChatService = {
  createChatRoom: async (members: string[]) => {
    try {
      const type = members.length > 2 ? 2 : 1;
      const docRef = await roomRef.add({
        members,
        type,
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
  getMyChatRooms: async (id: string) => {
    try {
      return await roomRef.get().then((querySnapshot) => {
        return querySnapshot.docs
          .filter((doc) => doc.data().members.includes(id))
          .map((doc) => {
            const { members, type } = doc.data();
            return { id: doc.id, members, type };
          });
      });
    } catch (error) {}
  },
  getPrivateChatRoom: async (loggedId: string, id: string) => {
    try {
      return await roomRef.get().then((querySnapshot) => {
        return querySnapshot.docs
          .filter((doc) => {
            const { members, type } = doc.data();
            if (type == 1 && members.includes(loggedId) && members.includes(id)) {
              return true;
            }
          })
          .map((doc) => doc.id)[0];
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
  sendMessage: async (roomId: string, uid: string, message: string) => {
    try {
      const messages = await messageRef.doc(roomId).collection('messages').add({
        sentBy: uid,
        messageText: message,
        sentAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      const result = await messages.get().then((querySnapshot) => {
        return querySnapshot.data();
      });
      return {
        message: result,
        error: null,
      };
    } catch (error) {
      return {
        message: null,
        error,
      };
    }
  },
};
