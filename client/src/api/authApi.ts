import axiosClient from "./axiosClient";
import { IUser } from "../interfaces/auth";

const authApi = {
  login: (params: IUser | undefined) => axiosClient.post("/auth/login", params),
  register: (params: IUser | undefined) =>
    axiosClient.post("/auth/signup", params),
  verifyToken: () => axiosClient.post("/auth/verify-token"),
};

export default authApi;
