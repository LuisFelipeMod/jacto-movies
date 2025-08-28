import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchFilmes = createAsyncThunk(
  "filmes/fetchFilmes",
  async (page = 1) => {
    const response = await api.get(`/filmes?page=${page}`);
    return response.data;
  }
);


const filmesSlice = createSlice({
  name: "filmes",
  initialState: {
    filmes: [],
    pagination: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilmes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filmes = action.payload.data;
        state.pagination = {
          currentPage: action.payload.current_page,
          total: action.payload.total,
          perPage: action.payload.per_page,
          lastPage: action.payload.last_page,
        };
      })
      .addCase(fetchFilmes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default filmesSlice.reducer;
