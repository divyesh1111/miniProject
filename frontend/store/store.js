import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import cartSlice from "./cartSlice";
import wishSlice from "./wishSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedWishReducer = persistReducer(persistConfig, wishSlice);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export {store, persistor};
