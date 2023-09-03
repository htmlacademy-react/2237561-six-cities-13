import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../const';
import { TState } from '../../types/state';
import {
  sortByRating,
  sortLowToHigh,
  sortHighToLow,
} from '../../utils/sort-offers';

const sorting = {
  [SortType.Popular]: () => 0,
  [SortType.LowToHigh]: sortLowToHigh,
  [SortType.HighToLow]: sortHighToLow,
  [SortType.TopRated]: sortByRating,
};

const getOffers = (state: TState) => state[NameSpace.Offers].offers;
const getCity = (state: TState) => state[NameSpace.Offers].city;
const getOffersDataLoading = (state: TState) =>
  state[NameSpace.Offers].isOffersDataLoading;
const getServerErrorStatus = (state: TState): boolean =>
  state[NameSpace.Offers].hasError;
const getSort = (state: TState): SortType => state[NameSpace.Offers].sortType;

const getSelectedOfferId = (state: TState): string | null =>
  state[NameSpace.Offers].selectedOfferId;

const getOffersData = createSelector(
  [getCity, getSort, getOffers],
  (city, sort, offers) =>
    offers.filter((offer) => offer.city.name === city).sort(sorting[sort])
);

export {
  getOffers,
  getCity,
  getOffersDataLoading,
  getServerErrorStatus,
  getSort,
  getSelectedOfferId,
  getOffersData,
};
