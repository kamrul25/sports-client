import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaBook, FaUsers, FaClipboard } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
  const { user, loading, setUserRole } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [role, setRole] = useState(null);
  useEffect(() => {
    // axios(`https://sports-server-two.vercel.app/users/${user.email}`)
   axiosSecure.get(`/users/${user?.email}`).then((data) => {
    setRole(data.data.role);
    setUserRole(data.data.role)
  });
  }, [user, axiosSecure, loading, setUserRole]);

  return (
    <div>
      <Helmet>
        <title>Sports | Dashboard</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
         
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden m-5 w-[200px]"
          >
            Open drawer
          </label>
           {/* Page content here */}
           <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="flex-col pl-12 pt-20 w-80 h-full bg-base-300 text-2xl">
            {role === "admin" && (
              <div className="space-y-3">
                <li>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageClasses"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaBook></FaBook> Manage Classes
                  </NavLink>
                </li>
              </div>
            )}
            {role === "instructor" && (
              <div className="space-y-3">
                <li>
                  <NavLink
                    to="/dashboard/addClass"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    {" "}
                  <FaClipboard></FaClipboard>  Add A Class
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/myClasses"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaBook></FaBook> My Classes
                  </NavLink>
                </li>
              </div>
            )}
            {role === "student" && (
              <div className="space-y-3">
                <li>
                  <NavLink
                    to="/dashboard/selected"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaBook></FaBook>My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/enrolled"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaWallet></FaWallet>My Enrolled Classes
                  </NavLink>
                </li>
              </div>
            )}
            <div className="divider"></div>
            <div className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-success flex gap-2 items-center"
                      : isPending
                      ? ""
                      : "text-black flex gap-2 items-center"
                  }
                >
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructors"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-success flex gap-2 items-center"
                      : isPending
                      ? ""
                      : "text-black flex gap-2 items-center"
                  }
                >
                  {" "}
                  <FaUsers></FaUsers> Instructors
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/classes"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-success flex gap-2 items-center"
                      : isPending
                      ? ""
                      : "text-black flex gap-2 items-center"
                  }
                >
                  <FaBook></FaBook> Classes
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
