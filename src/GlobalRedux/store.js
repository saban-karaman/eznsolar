

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice"





// THE GLOBAL STORE SET_UP
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});



// JavaScript equivalent of `RootState` type
export var RootState = store.getState();

// JavaScript equivalent of `AppDispatch` type
export var AppDispatch = store.dispatch;