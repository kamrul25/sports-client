import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Grid } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="absolute top-[40%] left-[40%]">
        <Grid
          height="80"
          width="80"
          color="#36d7b7"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if(!user){
      Swal.fire('You have to log in first to view details !!')
      return <Navigate to="/signIn"  state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;
