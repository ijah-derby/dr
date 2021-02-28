
import {IUser} from '../../auth/helpers/model';
import { IComment } from './comment';

export interface IFeed {
  doc?: any;
  title?: string;
  subtitle?: string;
  content?: string;
  images?: any;
  location?: string;
  createdAt?: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
  id?: any;
  uid?: any;
  user?: IUser;
  likes?: string[];
  userLiked?: boolean;
  videoContent?: string;
  videoUrl?: string;
  comments?: IComment[];
}
