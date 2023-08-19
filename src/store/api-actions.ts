import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/state';
import { APIRoute, NameSpace } from '../const';
import { fetchOffers, fetchOffersLoadingStatus } from '../store/actions';
import { TOffer } from '../types/offer';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { dispatch, extra: api }) => {
  dispatch(fetchOffersLoadingStatus(true));
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  dispatch(fetchOffersLoadingStatus(false));
  dispatch(fetchOffers(data));
});
