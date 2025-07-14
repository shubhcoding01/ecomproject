import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import ProductSlice from "./customer/ProductSlice";
import { thunk } from "redux-thunk";
import AuthSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice";

const rootReducer = combineReducers({
  seller:sellerSlice,
  sellerProduct:sellerProductSlice,
  product:ProductSlice,
  auth:AuthSlice,
  cart:cartSlice,
})

const store=configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()//.concat(thunk)

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;