export interface IUser {
  _id: any;
  name: string;
  email: string;
  password: string;
  roleInCompany: string;
  systemRole: string;
  company: string;
  authProvider: string;
  accessToken: string;
}
