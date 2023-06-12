import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="space-x-6 text-white mx-12">
      <Link to="signIn">Login</Link>
      <Link to="signUp">SignUp</Link>
    </div>
  );
};

export default Navbar;
