import {TLocation} from './location';

export type TCity = {
  name: string;
  location: TLocation;
};

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
