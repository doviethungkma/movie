import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "./../components/layout/AppLayout";
import Movie from "./../pages/Movie";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/watch/:movieId" element={<Movie />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
