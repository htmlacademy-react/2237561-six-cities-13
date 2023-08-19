import { createReducer } from '@reduxjs/toolkit';

import { TCity } from '../types/city';
import { TReview } from '../types/review';
import { TOffer, TFullOffer } from '../types/offer';
import {allReviews} from '../components/offers-review/reviews-mocks';

import {
  fetchOffers,
  fetchOffersLoadingStatus,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  dropOffer,
  setActiveCity,
  fetchFavorites,
} from './actions';

import { DEFAULT_LOCATION } from '../const';

type InitialState = {
  offers: TOffer[];
  nearPlaces: TOffer[];
  reviews: TReview[];
  offer: TFullOffer | null;
  favorites: TOffer[];
  activeCity: TCity;
  isOffersDataLoading: boolean;
};
const initialState: InitialState = {
  offers: [],
  nearPlaces: [],
  reviews: allReviews,
  offer: null,
  favorites: [],
  activeCity: DEFAULT_LOCATION,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
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
    });
});
