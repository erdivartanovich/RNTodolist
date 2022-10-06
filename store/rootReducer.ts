import { combineReducers, ThunkAction } from "@reduxjs/toolkit";
import todoReducer from "./todo/reducers";
const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;

type RootReducer = typeof rootReducer;
export type RootState = ReturnType<RootReducer>;
export type Actions = Parameters<RootReducer>[1];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Actions
>;
