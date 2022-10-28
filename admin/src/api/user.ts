import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("/user"),
  updateUser: (id: string, params: any) =>
    axiosClient.put(`/user/${id}`, params),
};

export default userApi;
