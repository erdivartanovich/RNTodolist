import { configureStore, EnhancedStore, Middleware } from "@reduxjs/toolkit";
import rootReducer, { Actions, RootState } from "./rootReducer";

export const configureAppStore = (
  preloadedState?: RootState | {}
): EnhancedStore<RootState, Actions> => {
  const devMiddlewares: Middleware[] = [];

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(devMiddlewares),
    preloadedState,
    enhancers: [],
  });
};

export type AppStore = ReturnType<typeof configureAppStore>;
export const store = configureAppStore();
