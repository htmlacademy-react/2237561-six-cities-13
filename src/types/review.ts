import {TUser} from './user';

export type TReview = {
  id: string;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
};


