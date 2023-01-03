import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { modalReducer } from "./slices/modal";
import { AuthStateProps } from "../components/interfaces/auth/IAuth";
import { ModalParamsState } from "./types/modal";

export interface IStore {
  auth: AuthStateProps,
  modal: ModalParamsState,
}

const store = configureStore<IStore>({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
    devTools: true,
});

export default store;
