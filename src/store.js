import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
export default store;
