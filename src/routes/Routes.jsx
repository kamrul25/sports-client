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
import AddClass from "../pages/Dashboard/Instrucotr/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instrucotr/MyClasses/MyClasses";
import Selected from "../pages/Dashboard/Student/Selected/Selected";
import Enrolled from "../pages/Dashboard/Student/Enrolled/Enrolled";

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
      {path:"addClass", element:<AddClass></AddClass>},
      {path:"myClasses", element:<MyClasses></MyClasses>},
      {path:"selected", element:<Selected></Selected>},
      {path:"enrolled", element:<Enrolled></Enrolled>}
    ],
  },
]);

export default router;
