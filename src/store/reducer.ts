import { createReducer } from '@reduxjs/toolkit';

import { TCity } from '../types/city';
import { TReview } from '../types/review';
import { TOffer, TFullOffer } from '../types/offer';

import {
  fetchOffers,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
} from './actions';

import { DEFAULT_LOCATION } from '../const';
import { fullOffers, offersList, nearOffers } from '../mocks/offers';
import { allReviews } from '../mocks/review';

type InitialState = {
  offers: TOffer[];
  nearPlaces: TOffer[];
  reviews: TReview[];
  offer: TFullOffer | null;
  favorites: TOffer[];
  activeCity: TCity;
};
const initialState: InitialState = {
  offers: [],
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: DEFAULT_LOCATION,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offersList;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer =
        fullOffers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = nearOffers.filter(
        (offer) => offer.id !== action.payload
      );
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
    });
});
