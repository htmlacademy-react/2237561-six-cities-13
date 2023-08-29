import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffersAction, setFavoritesAction } from '../api-actions';
import { TOffer } from '../../types/offer';
import { SortType, NameSpace, DEFAULT_LOCATION } from '../../const';

export type OffersDataState = {
  city: string;
  offers: TOffer[];
  selectedOfferId: string | null;
  isOffersDataLoading: boolean;
  sortType: SortType;
  hasError: boolean;
};

const initialState: OffersDataState = {
  city: DEFAULT_LOCATION.name,
  offers: [] as TOffer[],
  selectedOfferId: null,
  isOffersDataLoading: false,
  sortType: SortType.Popular,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    selectCityAction: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<string | null>) => {
      state.selectedOfferId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
        state.hasError = false;
      })
      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        const currentIndex = state.offers.findIndex(
          (offer) => offer.id === action.payload.id
        );
        state.offers[currentIndex].isFavorite =
          !state.offers[currentIndex].isFavorite;
      });
  },
});

export const { selectCityAction, changeSort, selectOffer } = offersData.actions;
