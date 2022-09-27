import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "./../components/layout/AppLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
