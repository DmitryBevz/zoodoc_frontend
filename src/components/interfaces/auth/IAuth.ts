import { IDocument } from "../document/IDocumend";

export interface IAuthData {
  id?: string;
  city?: string;
  email?: string;
  fullName?: string;
  phoneNumber?: string;
  likedPosts?: string[];
  savedPosts?: string[];
  avatarUrl?: IDocument;
  wallpaperUrl?: IDocument;
  followers?: string[];
  bio?: string;
  youtube?: string;
  instagram?: string;
  website?: string;
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegisterData {
  email: string;
  userName: string;
  role: number;
  lastName: string;
  password: string;
  phoneNumber: string;
}

export interface AuthStateProps {
  data: IAuthData | null;
  status: string;
  user: {
    data: IAuthData | null;
    status: string;
  };
}

export interface IWallpaperUpload {
  wallpaperUrl: IDocument;
}

export interface IAvatarUpload {
  avatarUrl: IDocument;
}
