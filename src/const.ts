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

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const DEFAULT_LOCATION = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: 'Paris'
};

export enum NameSpace {
Offers = 'OFFERS',
Offer = 'OFFER',
NearPlaces = 'NEAR_PLACES',
Reviews = 'REVIEWS',
Favorites = 'FAVORITES',
User = 'USER',
}
