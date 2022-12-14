import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";
import Comment from "../pages/Comment";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import NotFound from "../pages/NotFound";
import Review from "../pages/Review";
import { ROLE } from "../utils/constant";
import Package from "./../pages/Package";
import Signup from "./../pages/Signup";
import User from "./../pages/User";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route
        path="/"
        element={<AppLayout allowedRole={[ROLE.ADMIN, ROLE.MOD]} />}
      >
        <Route index element={<Home />} />\
      </Route>
      <Route
        path="/"
        element={<AppLayout allowedRole={[ROLE.ADMIN, ROLE.MOD]} />}
      >
        <Route path="/movie" element={<Movie />} />
      </Route>
      <Route path="/" element={<AppLayout allowedRole={[ROLE.ADMIN]} />}>
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="/" element={<AppLayout allowedRole={[ROLE.ADMIN]} />}>
        <Route path="/package" element={<Package />} />
      </Route>
      <Route
        path="/"
        element={<AppLayout allowedRole={[ROLE.ADMIN, ROLE.MOD]} />}
      >
        <Route path="/comment" element={<Comment />} />
      </Route>
      <Route
        path="/"
        element={<AppLayout allowedRole={[ROLE.ADMIN, ROLE.MOD]} />}
      >
        <Route path="/review" element={<Review />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="/notfound" element={<NotFound />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
