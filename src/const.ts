export const Setting = {
  OffersCount: 4,
} as const;

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/',
  OfferId = '/offer/:id',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const GRADES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly'
];

export const RATING_COEF = 20;

export const MIN_COMMENTS_LENGTH = 50;
export const MAX_COMMENTS_LENGTH = 300;
