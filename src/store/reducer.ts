import { createReducer } from '@reduxjs/toolkit';

import { TCity } from '../types/city';
import { TReview } from '../types/review';
import { TOffer, TFullOffer } from '../types/offer';
import {allReviews} from '../components/offers-review/reviews-mocks';

import {
  fetchOffers,
  setLoadingStatus,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
  requireAuthorization,
  setUserName,
} from './actions';

import { DEFAULT_LOCATION, AuthorizationStatus } from '../const';

type InitialState = {
  offers: TOffer[];
  nearPlaces: TOffer[];
  reviews: TReview[];
  offer: TFullOffer | null;
  favorites: TOffer[];
  activeCity: TCity;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userName: string;
};

const initialState: InitialState = {
  offers: [],
  nearPlaces: [],
  reviews: allReviews,
  offer: null,
  favorites: [],
  activeCity: DEFAULT_LOCATION,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(fetchReviews, (state) => {
      state.reviews = allReviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
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
