import { IStore } from "../../../store";

export const selectIsLogin = (state: IStore) => Boolean(state.auth.data);
