import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,

    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = makeStore();