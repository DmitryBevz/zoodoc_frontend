import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/auth";
import { modalReducer } from "./slices/modal";
import { IAuthStateProps } from "../components/interfaces/auth/IAuth";
import { ModalParamsState } from "./types/modal";
import { userReducer } from "./slices/user/user";

export interface IStore {
  user: IAuthStateProps;
  auth: IAuthStateProps;
  modal: ModalParamsState;
}

const store = configureStore<IStore>({
  reducer: {
    user: userReducer,
    auth: authReducer,
    modal: modalReducer,
  },
  devTools: true,
});

export default store;
