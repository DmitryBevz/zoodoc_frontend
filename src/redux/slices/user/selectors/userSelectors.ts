import { IStore } from "../../../store";

export const selectUserData = (state: IStore) => state.user.data;
export const selectIsUser = (state: IStore) => !!state.user.data;

export const selectIsUserDataLoading = (state: IStore) => state.user.status === "loading";
