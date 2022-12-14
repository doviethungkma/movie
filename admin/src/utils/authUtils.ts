import userApi from "./../api/user";

export const checkAuth = async (): Promise<boolean> => {
  //check have token or not
  const token = localStorage.getItem("token");
  if (!token) return false;

  //check token is valid
  try {
    const response: any = await userApi.verifyToken();
    //if user inatvice, return false
    if (response.status === "inactive") {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
