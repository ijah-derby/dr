
import {IUser} from '../../auth/helpers/model';
import { IFeed } from './feed';

export interface IComment {
  text?: string;
  doc?: string;
  id?: any;
  fid?: any;
  uid?: any;
  feed?: IFeed;
  user?: IUser;
  createdAt?: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
}
