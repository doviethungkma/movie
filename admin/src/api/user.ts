import axiosClient from "./axiosClient";
import { IAuth } from "./../interfaces/auth";

const userApi = {
  getAll: () => axiosClient.get("/user"),
  updateUser: (id: string, params: any) =>
    axiosClient.put(`/user/${id}`, params),
  updateUserPackage: (
    userId: string,
    packageId: string,
    packageMonth: number
  ) => axiosClient.put(`/user/${userId}/${packageId}/${packageMonth}`),
  login: (user: IAuth) => axiosClient.post("/auth/login", user),
  verifyToken: () => axiosClient.post("/auth/verify-token"),
};

export default userApi;
