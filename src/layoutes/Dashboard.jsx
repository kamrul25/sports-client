import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaBook, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;
  const isStudent = false;
  return (
    <div>
      <Helmet>
        <title>Sports | Dashboard</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="flex-col pl-12 pt-20 w-80 h-full bg-base-300 text-2xl">
            {isAdmin && (
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
            {isInstructor && (
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
                    Add A Class
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/myClass"
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
            {isStudent && (
              <div className="space-y-3">
                <li>
                  <NavLink
                    to="/dashboard/history"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-success flex gap-2 items-center"
                        : isPending
                        ? ""
                        : "text-black flex gap-2 items-center"
                    }
                  >
                    <FaWallet></FaWallet> Payment History
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

/* 
  <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    Manage Classes
                  </NavLink>
                </li>
              </>
            )}
             {isInstructor && (
            <>
            
              <li>
                <NavLink to="/dashboard/addItem">
                  {" "}
                  <FaUtensils></FaUtensils> Add An Item
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
             
            </>
          ) }
            {isStudent &&   <>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              
            </>} 
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors"> Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
*/
