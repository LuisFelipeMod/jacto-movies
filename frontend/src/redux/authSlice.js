import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password, password_confirmation }) => {
    const response = await api.post("/register", { name, email, password, password_confirmation });
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const response = await api.post("/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isRegistered: false,
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    resetRegistration: (state) => {
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isRegistered = true;
      });
  },
});

export const { logoutUser, resetRegistration } = authSlice.actions;
export default authSlice.reducer;
