import {TUser} from './user';
import {TLocation} from './location';
import {TCity} from './city';

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type TFullOffer = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: TCity;
  location: TLocation;
  goods: string[];
  host: TUser;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};
