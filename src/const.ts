/*export const Setting = {
  OffersCount: 4,
} as const;*/

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
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: 'Dusseldorf'
  }
];

/*export const DEFAULT_LOCATION = [{
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: 'Paris'
},
];*/

export enum NameSpace {
Offers = 'OFFERS',
Offer = 'OFFER',
NearPlaces = 'NEAR_PLACES',
Reviews = 'REVIEWS',
Favorites = 'FAVORITES',
User = 'USER',
}
