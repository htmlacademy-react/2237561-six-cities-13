import { AuthorizationStatus, NameSpace, Status } from '../../const';
import { TState } from '../../types/state';
import { TUserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus =>
  state[NameSpace.User].authStatus;

export const getAuthCheckedStatus = (state: TState): boolean =>
  state[NameSpace.User].authStatus !== AuthorizationStatus.NoAuth;

export const getUserData = (state: TState): TUserData | null =>
  state[NameSpace.User].userData;

export const getLoginStatus = (state: Pick<TState, NameSpace.User>): Status =>
  state[NameSpace.User].status;
