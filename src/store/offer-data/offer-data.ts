import { createSlice } from '@reduxjs/toolkit';
import {
  fetchOfferAction,
  fetchNearPlacesAction,
  fetchReviewsAction,
  postReviewAction,
  setFavoritesAction,
} from '../api-actions';
import { NameSpace } from '../../const';
import { TOffer, TFullOffer } from '../../types/offer';
import { TReview } from '../../types/review';

export type OfferDataState = {
  isOfferDataLoading: boolean;
  offerItem: TFullOffer | null;
  nearOffers: TOffer[];
  reviews: TReview[];
};

const initialState: OfferDataState = {
  isOfferDataLoading: false,
  offerItem: null,
  nearOffers: [],
  reviews: [],
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offerItem = null;
      state.nearOffers = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isOfferDataLoading = false;
        state.offerItem = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        state.nearOffers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });

        if (state.offerItem?.id === action.payload.id) {
          state.offerItem.isFavorite = action.payload.isFavorite;
        }
      });
  },
});
export const { dropOffer } = offerData.actions;
