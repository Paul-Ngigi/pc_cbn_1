export interface IAuth {
  accessToken: string;
  refreshToken: string;
  systemRole?: string;
  company?: string;
  userData: {
    userId: string;
    userData: {
      _id: string;
      name: string;
      email: string;
      roleInCompany: string;
      systemRole: string;
      authProvider: string;
      isEmailVerified: boolean;
      __v: number;
    };
    refreshKey: {
      type: string;
      data: number[];
    };
  };
}
