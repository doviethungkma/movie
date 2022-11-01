export interface IPackage {
  _id?: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface IUser {
  _id: string;
  username?: string;
  status?: string;
  email?: string;
  name?: string;
  phone?: string;
  role?: string;
  package?: Array<IPackage>;
}
