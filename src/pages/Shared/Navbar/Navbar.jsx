import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const handleLogout = () =>{
    logout()
    .then(()=>{
      alert("Logout confirm")
    })
    .catch(error =>{
      console.log(error)
    })
  }
  return (
    <div className="space-x-6 text-white mx-12">
      <Link to="signIn">Login</Link>
      <Link to="signUp">SignUp</Link>
      {user && <button onClick={handleLogout} className="bnt btn-warning ml-12">Logout</button>}
    </div>
  );
};

export default Navbar;
