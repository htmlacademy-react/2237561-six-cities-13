import { store } from '../store/index';
import { AuthorizationStatus, Status } from '../const';
import { TUserData } from './user-data';

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;

export type UserProcess = {
  authStatus: AuthorizationStatus;
  userData: TUserData | null;
  status: Status;
};
