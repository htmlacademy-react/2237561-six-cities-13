import { NameSpace } from '../../const';
import { TOffer } from '../../types/offer';
import { TState } from '../../types/state';

export const getFavorites = (state: TState): TOffer[] =>
  state[NameSpace.Favorites].favorites;

export const getFavoritesCount = (state: TState): number =>
  state[NameSpace.Favorites].favorites.length;
