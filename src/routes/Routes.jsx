import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layoutes/Dashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "classes", element: <Classes></Classes> },
      { path: "instructors", element: <Instructors></Instructors> },
      { path: "signIn", element: <SignIn></SignIn> },
      { path: "signUp", element: <SignUp></SignUp> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "allUsers", element: <ManageUsers></ManageUsers> },
      {path:"manageClasses", element:<ManageClasses></ManageClasses>},
    ],
  },
]);

export default router;
