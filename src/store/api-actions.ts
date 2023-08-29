import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState } from '../types/state';
import { APIRoute, AppRoute, NameSpace } from '../const';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { TOffer, TFullOffer } from '../types/offer';
import { TReview } from '../types/review';
import { AuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { getToken } from './../services/token';

export const fetchOffersAction = createAsyncThunk<
  TOffer[],
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offers}/fetchOffers`, async (_arg, { extra: api }) => {
  const { data } = await api.get<TOffer[]>(APIRoute.Offers);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  TFullOffer,
  string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offer}/fetchOffer`, async (id, { extra: api }) => {
  const { data } = await api.get<TFullOffer>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  TReview[],
  string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offer}/fetchReviews`, async (offerId, { extra: api }) => {
  const { data } = await api.get<TReview[]>(`${APIRoute.Reviews}/${offerId}`);
  return data;
});

export const postReviewAction = createAsyncThunk<
  TReview,
  {
    comment: string;
    rating: number;
    offerId: string;
  },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Offer}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const token = getToken();
    const response = await api.post<TReview>(
      `${APIRoute.Reviews}/${offerId}`,
      {
        comment,
        rating,
      },
      { headers: { 'X-token': token } }
    );
    return response.data;
  }
);

export const fetchNearPlacesAction = createAsyncThunk<
  TOffer[],
  string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.Offer}/fetchNearPlaces`, async (offerId, { extra: api }) => {
  const { data } = await api.get<TOffer[]>(
    `${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`
  );
  return data;
});

export const fetchFavoritesAction = createAsyncThunk<
  TOffer[],
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Favorites}/fetchFavoritesAction`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffer[]>(`${APIRoute.Favorites}`);
    return data;
  }
);

export const setFavoritesAction = createAsyncThunk<
  TOffer,
  {
    id: string;
    status: number;
  },
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Favorites}/favoriteStatus`,
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<TOffer>(
      `${APIRoute.Favorites}/${id}/${status}`,
      {}
    );

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  TUserData,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(`${NameSpace.User}/checkAuth`, async (_arg, { extra: api }) => {
  const { data } = await api.get<TUserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  TUserData,
  AuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.User}/login`,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<TUserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data;
    } catch {
      throw new Error();
    }
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
>(`${NameSpace.User}/logout`, async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
