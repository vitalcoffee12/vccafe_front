import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./persist";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootReducerType = ReturnType<typeof rootReducer>;
