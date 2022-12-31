import { useEffect, useState } from "react";
import authApi from "./../api/authApi";

const useAuth = () => {
  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const response = await authApi.verifyToken();
    if (response.data.status === false || token === undefined)
      setIsLogedIn(false);
    setIsLogedIn(true);
  };

  useEffect(() => {
    checkToken();
  });

  return {
    isLogedIn,
    checkToken,
  };
};

export default useAuth;
