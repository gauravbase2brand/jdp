import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';
import uiSlice from './slices/uiSlice';
import productsSlice from './slices/productsSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  ui: uiSlice,
  products: productsSlice,
});