import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "signIn", element: <SignIn></SignIn> },
      { path: "signUp", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;
