import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import filmesReducer from "./filmesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filmes: filmesReducer
  }
});
