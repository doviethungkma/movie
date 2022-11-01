import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("/user"),
  updateUser: (id: string, params: any) =>
    axiosClient.put(`/user/${id}`, params),
  updateUserPackage: (
    userId: string,
    packageId: string,
    packageMonth: number
  ) => axiosClient.put(`/user/${userId}/${packageId}/${packageMonth}`),
};

export default userApi;
