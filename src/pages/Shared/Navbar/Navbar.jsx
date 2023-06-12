import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FcMenu } from "react-icons/fc";
import img from "../../../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout confirm");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navbar = <>
  
  <li>
    <Link>Home</Link>
  </li>
  <li>
    <Link>Instructors</Link>
  </li>
  <li>
    <Link>Classes</Link>
  </li>
  <li>
    {user && <Link>Dashboard</Link>}
  </li>
  
  </>
  return (
    <div className="navbar w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FcMenu className="text-2xl"></FcMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbar}
          </ul>
        </div>
        <a className="w-20">
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={handleLogout}
                  className="bnt btn-primary ml-12"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="signIn">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
