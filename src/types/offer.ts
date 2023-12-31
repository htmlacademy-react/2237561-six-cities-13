import {
  TypeOfHousing,
} from '../const';

import { TUserData } from './user-data';
import { TLocation } from './location';
import { TCity } from './city';

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
  previewImage?: string;
};

export type TFullOffer = {
  id: string;
  title: string;
  description: string;
  type: keyof typeof TypeOfHousing;
  price: number;
  images: string[];
  city: TCity;
  location: TLocation;
  goods: string[];
  host: TUserData;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';
