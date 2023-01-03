import {
  createAsyncThunk,
  createSlice,
  Draft,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import axios from "../../configure/axios";
import {
  AuthStateProps,
  IAuthData,
  IAvatarUpload, IUserLoginData, IUserRegisterData,
  IWallpaperUpload
} from "../../components/interfaces/auth/IAuth";
import { BaseResponse } from "../../components/interfaces/BaseResponse";
import { SendMessage } from "../../components";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: IUserLoginData) => {
    const { data } = await axios.post<BaseResponse<IAuthData>>(
      `/token`,
      params
    );
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get<BaseResponse<IAuthData>>(
    `/userInfo`
  );
  return data;
});

export const fetchUserById = createAsyncThunk(
  "auth/fetchUserById",
  async (id: string) => {
    const { data } = await axios.get<BaseResponse<IAuthData>>(
      `/getUserById/${id}`
    );
    return data;
  }
);

export const setRegister = createAsyncThunk(
  "auth/setRegister",
  async (params: IUserRegisterData) => {
    const { data } = await axios.post<BaseResponse<IAuthData>>(
      `/registration`,
      params
    );
    return data;
  }
);

export const updateProfileWallpaper = createAsyncThunk(
  "auth/updateProfileWallpaper",
  async (params: IWallpaperUpload | any) => {
    const { data } = await axios.put<BaseResponse<IWallpaperUpload>>(
      `/updateWallpaper`,
      params
    );
    return data;
  }
);

export const updateProfileAvatar = createAsyncThunk(
  "auth/updateProfileAvatar",
  async (params: IAvatarUpload) => {
    const { data } = await axios.put<BaseResponse<IAvatarUpload>>(
      `/updateAvatar`,
      params
    );
    return data;
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (params: IAuthData) => {
    try {
      const { data } = await axios.put<BaseResponse<IAuthData>>(
        `/updateUserInfo`,
        params
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async () => {
    try {
      const { data } = await axios.delete<BaseResponse<IAuthData>>(
        `/deleteProfile`
      );

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const sendFeedback = createAsyncThunk(
  "auth/sendFeedback",
  async (params: SendMessage) => {
    const { data } = await axios.post<BaseResponse<string>>(
      `/sendFeedback`,
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
    AuthStateProps,
    SliceCaseReducers<AuthStateProps>
  >({
    name: "auth",
    initialState,
    reducers: {
      logout: (state?: Draft<AuthStateProps>) => {
        state!.data = null;
      },
    },
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
      // me
      [fetchAuthMe.pending.toString()]: (state) => {
        state.status = "loading";
        state.data = null;
      },
      [fetchAuthMe.fulfilled.toString()]: (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      },
      [fetchAuthMe.rejected.toString()]: (state) => {
        state.status = "error";
        state.data = null;
      },
      // update user
      [updateUserInfo.pending.toString()]: (state) => {
        state.status = "loading";
      },
      [updateUserInfo.fulfilled.toString()]: (state, action) => {
        state.status = "loaded";
      },
      [updateUserInfo.rejected.toString()]: (state) => {
        state.status = "error";
      },
      // userById
      [fetchUserById.pending.toString()]: (state) => {
        state.user.status = "loading";
        state.user.data = null;
      },
      [fetchUserById.fulfilled.toString()]: (state, action) => {
        state.user.status = "loaded";
        state.user.data = action.payload;
      },
      [fetchUserById.rejected.toString()]: (state) => {
        state.user.status = "error";
        state.user.data = null;
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
