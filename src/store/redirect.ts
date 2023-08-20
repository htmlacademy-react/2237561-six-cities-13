import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../browser-history';
import {Middleware} from 'redux';
import {reducer} from './reducer';
import { NameSpace } from '../const';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === `${NameSpace.Data}/redirectToRoute`) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
