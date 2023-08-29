import {TUserData} from './user-data';

export type TReview = {
  id: string;
  user: TUserData;
  rating: number;
  comment: string;
  date: string;
};

export type TReviewData = {
  comment: string;
  rating: number;
}

