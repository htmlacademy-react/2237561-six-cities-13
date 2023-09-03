export const GRADES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export const RATING_COEF = 20;

export const REVIEW_LIMIT = 10;

export const DEFAULT_LOCATION = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  name: 'Paris',
};
export const MAX_NEAR_PLACES_COUNT = 3;

export const MAX_REVIEWS_COUNT = 10;

export const DEFAULT_RATING = 0;

export const DEFAULT_IMG_AVATAR = './img/avatar.svg';

export const OFFER_IMAGES_MAX_COUNT = 6;

export const CITIES_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const CITIES = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
    name: 'Dusseldorf',
  },
];

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Main = '/',
  Offer = '/offer/',
  OfferId = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  User = 'USER',
  App = 'APP',
  Favorites = 'FAVORITES',
}

export enum APIRoute {
  Offers = '/offers',
  NearPlaces = '/nearby',
  Favorites = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum ReviewLength {
  Min = 50,
  Max = 300,
}

export enum Status {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Error = 'Error'
}

export const CardClass = {
  CITY: {
    name: 'cities',
    width: 260,
    height: 200,
  },
  FAVORITES: {
    name: 'favorites',
    width: 150,
    height: 110,
  },
} as const;
