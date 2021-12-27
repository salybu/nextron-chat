export type userAuth = {
  email: string;
  password: string;
};

export type UserInfo = {
  id: string;
  email: string;
  name: string;
  profilePic: string;
};

export type roomWithUID = {
  id: string;
  members: string[];
  type: number;
};

export type ChatRoom = {
  id: string;
  members: UserInfo[];
  type: number;
};

export type ChatMessage = {
  messageText: string;
  sentBy: UserInfo;
  sentAt: string;
};
