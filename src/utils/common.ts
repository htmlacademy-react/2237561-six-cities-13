import { CITIES_LIST } from '../const';

export const getRandomArrayElement = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min) + min);

export const getRandomCity = (): string =>
  CITIES_LIST[getRandomArrayElement(0, CITIES_LIST.length - 1)];

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
