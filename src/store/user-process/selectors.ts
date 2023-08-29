import { AuthorizationStatus, NameSpace } from '../../const';
import { TState } from '../../types/state';
import { TUserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus =>
  state[NameSpace.User].authStatus;

export const getAuthCheckedStatus = (state: TState): boolean =>
  state[NameSpace.User].authStatus !== AuthorizationStatus.NoAuth;

export const getUserName = (state: TState): TUserData | null =>
  state[NameSpace.User].userData;
