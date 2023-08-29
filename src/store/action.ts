import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>(
  `${NameSpace.User}/redirectToRoute`
);


