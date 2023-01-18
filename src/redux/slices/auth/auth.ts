import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import axios from "../../../configure/axios";
import {
  IAuthStateProps,
  IAuthData, IUserLoginData, IUserRegisterData,
} from "../../../components/interfaces/auth/IAuth";

export const setLogin = createAsyncThunk(
  "auth/setLogin",
  async (params: IUserLoginData) => {
    const { data } = await axios.post<IAuthData>(
      `token`,
      params
    );
    return data;
  }
);

export const setRegister = createAsyncThunk(
  "auth/setRegister",
  async (params: IUserRegisterData) => {
    const { data } = await axios.post<IAuthData>(
      `registration`,
      params
    );
    return data;
  }
);

const initialState = {
  data: null,
  status: "",
  user: {
    data: null,
    status: "loading",
  },
};

  const authSlice = createSlice<
    IAuthStateProps,
    SliceCaseReducers<IAuthStateProps>
  >({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
      [setLogin.pending.toString()]: (state) => {
        state.status = "loading";
        state.data = null;
      },
      [setLogin.fulfilled.toString()]: (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      },
      [setLogin.rejected.toString()]: (state) => {
        state.status = "error";
        state.data = null;
      },
      // register
      [setRegister.pending.toString()]: (state) => {
        state.status = "loading";
        state.data = null;
      },
      [setRegister.fulfilled.toString()]: (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      },
      [setRegister.rejected.toString()]: (state) => {
        state.status = "error";
        state.data = null;
      },
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
