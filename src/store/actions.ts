import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offer';
import { TReview } from '../types/review';
import { NameSpace, AuthorizationStatus } from '../const';
import { TCity } from '../types/city';

export const fetchOffers = createAction<TOffer[]>(
  `${NameSpace.Offers}/fetchOffers`
);
export const fetchOffersLoadingStatus = createAction(
  'data/setOffersDataLoadingStatus',
  (data: boolean) => ({ payload: data })
);
export const fetchOffer = createAction<TFullOffer>(
  `${NameSpace.Offer}/fetchOffer`
);
export const fetchNearPlaces = createAction<TOffer[]>(
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
export const requireAuthorization = createAction<AuthorizationStatus>(
  `${NameSpace.User}/requireAuthorization`
);
export const setError = createAction<string | null>(
  `${NameSpace.Data}/setError`
);
