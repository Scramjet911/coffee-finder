import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import baseApi from '~/api';

import storeLogger from './logger';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    const list = [baseApi.middleware];
    if (import.meta.env.VITE_ENV === 'dev') {
      list.push(storeLogger);
    }
    return getDefaultMiddleware().concat(list);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
