import React from "react";

import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Signup from "./../pages/Signup";
import User from "./../pages/User";
import Package from "./../pages/Package";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />\
        <Route path="/movie" element={<Movie />} />
        <Route path="/user" element={<User />} />
        <Route path="/package" element={<Package />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
