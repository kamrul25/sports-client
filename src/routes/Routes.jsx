import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {path:'classes', element:<Classes></Classes>},
      {path:'instructors', element:<Instructors></Instructors>},
      { path: "signIn", element: <SignIn></SignIn> },
      { path: "signUp", element: <SignUp></SignUp> },
    ],
  },{
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
  }
]);

export default router;
