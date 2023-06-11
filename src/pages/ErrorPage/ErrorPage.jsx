import {  Link, useRouteError } from "react-router-dom";
import img from "../../assets/error.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className=" bg-cover bg-no-repeat w-full h-[100vh]"
    >
      <div className=" text-center pt-8 space-y-4">
        <p className="text-warning text-3xl font-semibold ">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-warning text-2xl font-medium ">
          <i>{error.statusText || error.message} this page</i>
        </p>
       <Link to='/' className="btn text-white  btn-error ">Back To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
