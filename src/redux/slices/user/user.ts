import {
    createAsyncThunk,
    createSlice,
    SliceCaseReducers,
  } from "@reduxjs/toolkit";
  import axios from "../../../configure/axios";
  import {
    IAuthStateProps,
    IAuthData,
  } from "../../../components/interfaces/auth/IAuth";
  
  export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async () => {
      const { data } = await axios.get<IAuthData>(
        "profile"
      );
      return data;
    }
  );
  
  const initialState = {
    data: null,
    status: "",
  };
  
    const userSlice = createSlice<
    IAuthStateProps,
      SliceCaseReducers<IAuthStateProps>
    >({
      name: "user",
      initialState,
      reducers: {},
      extraReducers: {
        [fetchAuth.pending.toString()]: (state) => {
          state.status = "loading";
          state.data = null;
        },
        [fetchAuth.fulfilled.toString()]: (state, action) => {
          state.status = "loaded";
          state.data = action.payload;
        },
        [fetchAuth.rejected.toString()]: (state) => {
          state.status = "error";
          state.data = null;
        },
    },
  });
  
  export const userReducer = userSlice.reducer;
  