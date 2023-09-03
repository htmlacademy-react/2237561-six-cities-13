import { TUserData } from './user-data';

export type TReview = {
  id: string;
  user: TUserData;
  rating: number;
  comment: string;
  date: string;
};
