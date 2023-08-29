import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchFavoritesAction, setFavoritesAction } from '../api-actions';
import { TOffer } from '../../types/offer';

export type TFavoritesData = {
  favorites: TOffer[];
  setStatus: boolean | null;
};

const initialState: TFavoritesData = {
  favorites: [],
  setStatus: null,
};

export const favoriteData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.setStatus = null;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.setStatus = true;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.setStatus = false;
      })
      .addCase(setFavoritesAction.pending, (state) => {
        state.setStatus = null;
      })
      .addCase(setFavoritesAction.fulfilled, (state, action) => {
        state.setStatus = true;

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(
            ({ id }) => id !== action.payload.id
          );
        }
      })
      .addCase(setFavoritesAction.rejected, (state) => {
        state.setStatus = false;
      });
  },
});
