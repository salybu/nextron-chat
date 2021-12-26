import firestore from '../../lib/firebase';

const roomRef = firestore.collection('groups');

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
};
