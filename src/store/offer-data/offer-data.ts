import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchOfferAction,
  fetchNearPlacesAction,
  fetchReviewsAction,
  postReviewAction,
  setFavoritesAction,
} from '../api-actions';
import { NameSpace, Status } from '../../const';
import { TOffer, TFullOffer } from '../../types/offer';
import { TReview } from '../../types/review';
import { toast } from 'react-toastify';

export type OfferDataState = {
  isOfferDataLoading: boolean;
  offerItem: TFullOffer | null;
  nearOffers: TOffer[];
  reviews: TReview[];
  status: Status;
};

const initialState: OfferDataState = {
  isOfferDataLoading: false,
  offerItem: null,
  nearOffers: [],
  reviews: [],
  status: Status.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    dropOffer: (state) => {
      state.offerItem = null;
      state.nearOffers = [];
    },
    setReviewStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
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
        state.status = Status.Success;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.status = Status.Error;
        toast.warn('Failed to post comment. Please, try again later');
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
export const { dropOffer, setReviewStatus } = offerData.actions;
