import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FcMenu } from "react-icons/fc";
import img from "../../../assets/logo.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `Successfully Logout`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navbar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "text-success" : isPending ? "text-black" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive, isPending }) =>
            isActive ? "text-success" : isPending ? "text-black" : ""
          }
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isActive ? "text-success" : isPending ? "text-black" : ""
          }
        >
          Classes
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isActive ? "text-success" : isPending ? "text-black" : ""
            }
          >
            Dashboard
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar w-full fixed top-0 left-0 right-0 z-10 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FcMenu className="text-2xl"></FcMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <div className="text-2xl">{navbar}</div>
          </ul>
        </div>

        <Link to="/" className="w-20">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="absolute left-32 hidden lg:flex">
        <ul className=" space-x-6 px-1 text-2xl flex ">{navbar}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-left  ">
            <label tabIndex={0} className="btn  btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 menu menu-sm dropdown-content  text-2xl"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="p-4 bg-green-400 hover:bg-green-400  "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="signIn" className="btn btn-success ml-12">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
