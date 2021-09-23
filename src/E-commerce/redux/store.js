import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userReducer } from "./user/userReducer";
import { cartReducer } from "./cart/cartReducer";
import { directoryReducer } from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"],
};

const middlewares = [logger];

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
