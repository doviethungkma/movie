import axiosClient from "./axiosClient";
import { IUser } from "../interfaces/user";

const userApi = {
  editUserInfor: (id: string, params: IUser | undefined) =>
    axiosClient.put(`/user/detail/${id}`, params),
  getUserDetail: (id: string) => axiosClient.get(`/user/detail/${id}`),
};

export default userApi;
