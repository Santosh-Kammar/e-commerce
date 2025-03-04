// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import productReducer from "./slices/productSlice";
// import cartReducer from "./slices/cartSlice";

// // Persist configuration
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   products: productReducer,
//   cart: persistReducer(persistConfig, cartReducer),
// });

// // Configure store
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Needed to avoid warnings with redux-persist
//     }),
// });

// // Persistor
// export const persistor = persistStore(store);
