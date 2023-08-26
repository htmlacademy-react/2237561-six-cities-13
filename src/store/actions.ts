import { createAction } from '@reduxjs/toolkit';
import { TFullOffer, TOffer } from '../types/offer';
import { TReview } from '../types/review';
import { NameSpace, AuthorizationStatus, AppRoute } from '../const';
import { TCity } from '../types/city';

export const fetchOffers = createAction<TOffer[]>(
  `${NameSpace.Offers}/fetchOffers`
);
export const setLoadingStatus = createAction(
  `${NameSpace.Data}/setLoadingStatus`,
  (data: boolean) => ({ payload: data })
);
export const fetchOffer = createAction<TFullOffer>(
  `${NameSpace.Offer}/fetchOffer`
);
export const fetchNearPlaces = createAction<TOffer[]>(
  `${NameSpace.NearPlaces}/fetchNearPlaces`
);
export const fetchReviews = createAction<TReview[]>(
  `${NameSpace.Reviews}/fetchReviews`
);
export const addReview = createAction<TReview>(`${NameSpace.Reviews}/addReview`);

export const dropSendingStatus = createAction(`${NameSpace.Reviews}/dropSendingStatus`);

export const setActiveCity = createAction<TCity>(
  `${NameSpace.Offers}/setActiveCity`
);
export const fetchFavorites = createAction(
  `${NameSpace.Favorites}/fetchFavorites`
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  `${NameSpace.User}/requireAuthorization`
);
export const redirectToRoute = createAction<AppRoute>(
  `${NameSpace.User}/redirectToRoute`
);
export const setUserName = createAction<string>(
  `${NameSpace.User}/setUserName`
);

