import { createReducer } from '@reduxjs/toolkit';

import { TCity } from '../types/city';
import { TReview } from '../types/review';
import { TOffer, TFullOffer } from '../types/offer';


import {
  fetchOffers,
  setLoadingStatus,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  addReview,
  dropSendingStatus,
  setActiveCity,
  fetchFavorites,
  requireAuthorization,
  setUserName,
} from './actions';

import { postReview } from './api-actions';

import { DEFAULT_LOCATION, AuthorizationStatus, RequestStatus } from '../const';

type InitialState = {
  offers: TOffer[];
  nearPlaces: TOffer[];
  reviews: TReview[];
  offer: TFullOffer | null;
  favorites: TOffer[];
  activeCity: TCity;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  sendReviewStatus: string;
  userName: string;
};

const initialState: InitialState = {
  offers: [],
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_LOCATION,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  sendReviewStatus: RequestStatus.Unsent,
  userName: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postReview.pending, (state) => {
      state.sendReviewStatus = RequestStatus.Pending;
    })
    .addCase(postReview.fulfilled, (state) => {
      state.sendReviewStatus = RequestStatus.Success;
    })
    .addCase(postReview.rejected, (state) => {
      state.sendReviewStatus = RequestStatus.Error;
    })
    .addCase(dropSendingStatus, (state) => {
      state.sendReviewStatus = RequestStatus.Unsent;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserName, (state, action) => {
      state.userName = action.payload;
    });
});
