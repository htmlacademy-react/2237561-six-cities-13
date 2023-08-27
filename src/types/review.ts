import {TUser} from './user';

export type TReview = {
  id: string;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
};

export type TReviewData = {
  comment: string;
  rating: number;
}

