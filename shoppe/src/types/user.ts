export interface IUser {
  id: number;
  email: string;
  password: string;
}

export interface IUserLogin {
  id: number;
  user: IUser;
  accessToken: string;
}
