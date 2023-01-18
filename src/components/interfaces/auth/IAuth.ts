import { IDocument } from "../document/IDocumend";

export enum Role {
  Doctor = 0,
  Patient = 1,
}

export interface IAuthData {
  email: string;
  firstName: string;
  role: string;
  lastName: string;
  password: string;
  phone: string;
  roles: Role[];
}

export interface IUserLoginData {
  login: string;
  password: string;
}

export interface IUserRegisterData {
  email: string;
  firstName: string;
  role: number;
  lastName: string;
  password: string;
  phone: string;
}

export interface IAuthStateProps {
  data: IAuthData | null;
  status: string;
}
