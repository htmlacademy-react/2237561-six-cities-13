import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, Status } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authStatus: AuthorizationStatus.Unknown,
  userData: null,
  status: Status.Idle,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.status = Status.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.status = Status.Error;
      })
      .addCase(loginAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.status = Status.Success;
      })
      .addCase(logoutAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.authStatus = AuthorizationStatus.NoAuth;
        state.status = Status.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.status = Status.Error;
      });
  },
});

export const { setLoginStatus } = userProcess.actions;
