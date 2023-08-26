import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/state';
import { APIRoute, AppRoute, NameSpace, AuthorizationStatus } from '../const';
import {
  fetchOffers,
  fetchOffer,
  fetchNearPlaces,
  fetchReviews,
  setLoadingStatus,
  addReview,
  requireAuthorization,
  redirectToRoute,
  setUserName,
} from '../store/actions';

import { saveToken, dropToken } from '../services/token';
import { TOffer, TFullOffer } from '../types/offer';
import { TReview, TReviewData } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  dispatch(setLoadingStatus(false));
  dispatch(fetchOffers(data));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Offer}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setLoadingStatus(true));
    const { data: offer } = await api.get<TFullOffer>(
      `${APIRoute.Offers}/${id}`
    );
    const { data: reviews } = await api.get<TReview[]>(
      `${APIRoute.Reviews}/${id}`
    );
    const { data: nearby } = await api.get<TOffer[]>(
      `${APIRoute.Offers}/${id}${APIRoute.NearPlaces}`
    );
    dispatch(setLoadingStatus(false));
    dispatch(fetchOffer(offer));
    dispatch(fetchReviews(reviews));
    dispatch(fetchNearPlaces(nearby));
  }
);

export const postReview = createAsyncThunk<void, {reviewData: TReviewData; offerId: TOffer['id']}, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  `${NameSpace.Reviews}/postReview`,
  async ({reviewData, offerId}, {dispatch, extra: api}) => {
    const { data } = await api.post<TReview>(`${APIRoute.Reviews}/${offerId}`, reviewData);
    dispatch(addReview(data));
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserName(email));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
