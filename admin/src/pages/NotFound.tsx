import React from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img
        src={require("../assets/images/notfound.svg").default}
        alt=""
        className="w-[40%]"
      />
      <h2 className="text-[32px] text-green-500 mt-10">OOOP</h2>
      <p className="text-[28px] text-white mt-2">Page not found</p>
      <div className="mt-4">
        <Button
          name="Back to homepage"
          px={4}
          py={2}
          color="bg-green-500"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default NotFound;
