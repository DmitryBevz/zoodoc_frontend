import {IStore} from "../../store";

export const selectIsAuth = (state: IStore) => Boolean(state.auth.data);

export const selectUserData = (state: IStore) => state.auth.data;

export const selectAnotherUserData = (state: IStore) => state.auth.user.data;

export const selectAnotherUserDataStatus = (state: IStore) =>
  state.auth.user.status === "loading";

export const selectUserDataStatus = (state: IStore) =>
  state.auth.status === "loading";

export const selectUpdateUserData = (state: IStore) =>
  state.auth.status === "loading";

