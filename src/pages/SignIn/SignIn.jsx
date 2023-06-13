import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/sign.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state?.form?.pathname || "/";

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const userData = {
          name: result.user.displayName,
          image: result.user.photoURL,
          email: result.user.email,
          role: "student",
        };
        fetch("https://sports-server-two.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((resData) => {
            if (resData.insertedId) {
              Swal.fire({
                title: "Success!",
                text: `${result.user.displayName} you sign up successfully! `,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
              reset();
            }
            else{
              Swal.fire({
                title: "Success!",
                text: `${result.user.displayName} you sign up successfully! `,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
              reset();
            }
          });
        
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const userData = {
          name: result.user.displayName,
          image: result.user.photoURL,
          email: result.user.email,
          role: "student",
        };
        fetch("https://sports-server-two.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((resData) => {
            if (resData.insertedId) {
              Swal.fire({
                title: "Success!",
                text: `${result.user.displayName} you sign up successfully! `,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
            }
            else{
              Swal.fire({
                title: "Success!",
                text: `${result.user.displayName} you sign up successfully! `,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Sports | Sign In</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div>
            <img src={img} alt="" className="border-0 rounded-lg" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered  input-primary w-full"
                  />
                  {errors.email?.type === "required" && (
                    <p className="mt-2 text-red-600">Email is required</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    })}
                    placeholder="password"
                    className="input input-bordered  input-primary w-full"
                  />
                  {errors.password?.type === "required" && (
                    <p className="mt-2 text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="mt-2 text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="mt-2 text-red-600">
                      Password must be less than 12 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="mt-2 text-red-600">
                      Password must have one Uppercase and one special
                      character.
                    </p>
                  )}
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="divider mt-8">Or Login With</div>
              <div className="form-control ">
                <button className="btn btn-primary" onClick={handleGoogle}>
                  <FcGoogle className="text-2xl mr-3" />{" "}
                  <span className="text-sm ">Google</span>
                </button>
              </div>
              <p className="absolute left-10 top-[64%] text-lg ">
                Haven't An Account. Please{" "}
                <Link to="/signUp" className="link link-primary">
                  Create
                </Link>
              </p>

              {showPassword ? (
                <button className="absolute top-[38%] right-12 text-2xl">
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                </button>
              ) : (
                <button className="absolute top-[38%] right-12 text-2xl">
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
