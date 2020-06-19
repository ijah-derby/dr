
import { IUser } from '../../auth/helpers/model';
import { IComment } from './comment';
import { IFeed } from './feed';

export interface IReply {
  text?: string;
  doc?: string;
  id?: any;
  fid?: any;
  cid?: any;
  uid?: any;
  comment?: IComment;
  feed?: IFeed;
  user?: IUser;
  createdAt?: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
}
