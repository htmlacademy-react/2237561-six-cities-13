import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offer';
import { TReview } from '../types/review';
import { NameSpace } from '../const';
import { TCity } from '../types/city';

export const fetchOffers = createAction<TOffer['id']>(`${NameSpace.Offers}/fetchOffers`);
export const fetchOffer = createAction<TFullOffer['id']>(
  `${NameSpace.Offer}/fetchOffer`
);
export const fetchNearPlaces = createAction<TOffer['id']>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`
);
export const fetchReviews = createAction<TReview['id']>(
  `${NameSpace.Reviews}/fetchReviews`
);
export const dropOffer = createAction(`${NameSpace.Offer}/dropOffer`);
export const setActiveCity = createAction<TCity>(
  `${NameSpace.Offers}/setActiveCity`
);
export const fetchFavorites = createAction(
  `${NameSpace.Favorites}/fetchFavorites`
);
