import { IUser } from 'src/pages/auth/helpers/model';

export interface IMessage {
  id?: string;
  participants?: IUser[];
  participantsId: string[];
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
  isRead?: boolean;
  isArchieved?: boolean;
  selected?: boolean;
  messages: IChat[];
  uid: string;
  last_sender: string;
  unread_count: number;
  seen: boolean;
}

export interface INotification {
  id?: string;
  body?: string;
  by?: string;
  type?: number;
  to?: string;
  postId?: string;
  seen?: number;
  seenBy?: string[];
  timestamp?: firebase.firestore.Timestamp;
  photoURL?: string
}

export interface IChat {
  value: string | string[];
  images?: string[];
  imagesUrl?: any[];
  sendAt: any;
  type: number;
  uid: string;
}

export interface IFriends {
  createdAt?: firebase.firestore.Timestamp;
  friendIds?: IUser[];
  updatedAt?: firebase.firestore.Timestamp;
}

export enum CHAT_TYPES {
  TEXT,
  AUDIO,
  IMAGE,
  IMAGE_GROUP,
}
