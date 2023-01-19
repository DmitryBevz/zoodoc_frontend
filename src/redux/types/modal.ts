export enum ModalType {
  Logout = "Logout",
  UpdateUserData = "UpdateUserData",
  DeleteUser = "DeleteUser",
  Error = "Error",
}

export interface ModalParams {
  onSubmit?: (params: any) => void;
  onCancel?: (params: any) => void;
  onClickFollow?: (params: any) => void;
  type: ModalType;
  payload?: any;
}

export interface ModalState extends ModalParams {
  isOpen: boolean;
}

export type ModalParamsState = {
  [keys in ModalType]?: ModalState;
};
