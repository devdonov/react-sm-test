import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productReducer from './ProductSlice';
import orderReducer from './OrderSlice';

const reducer = combineReducers({
  products: productReducer,
  orders: orderReducer
})

export const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
