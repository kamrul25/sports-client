import { Helmet } from "react-helmet-async";
import { useForm, } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/sign.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const {createUser} = useContext(AuthContext)
  let password;
  password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      
      updateProfile(user, {
        displayName: data.name,
        photoURL: data.photoURL
      })
      .then(()=>{

        reset();
      })
    })
    .catch(error => {
      console.log(error)
    })
  };
  return (
    <div>
      <Helmet>
        <title>Sports | Sign Up</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div>
            <img src={img} alt="" className="border-0 rounded-lg" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered  input-primary w-full"
                />
                {errors.name?.type === "required" && (
                  <p className="mt-2 text-red-600">Name is required</p>
                )}
              </div>
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
                    Password must have one Uppercase and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                   type={confirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === getValues("password"),
                  })}
                  placeholder="confirm password"
                  className="input input-bordered  input-primary w-full"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="mt-2 text-red-600">
                    Confirm Password is required
                  </p>
                )}
                {errors.confirmPassword?.type === "validate" && (
                  <p className="mt-2 text-red-600">
                    Does not match with password!
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered  input-primary w-full"
                />
                {errors.photoURL?.type === "required" && (
                  <p className="mt-2 text-red-600">Photo URL is required</p>
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
            <p className="absolute left-10 bottom-1 text-lg ">
              Already Have An Account. Please{" "}
              <Link to="/signIn" className="link link-accent">
                Login
              </Link>
            </p>

            {showPassword ? (
              <button className="absolute top-[44%] right-12 text-2xl">
                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
              </button>
            ) : (
              <button className="absolute top-[44%] right-12 text-2xl">
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              </button>
            )}
            {confirmPassword ? (
              <button className="absolute top-[60%] right-12 text-2xl">
                <FaEyeSlash onClick={() => setConfirmPassword(!confirmPassword)} />
              </button>
            ) : (
              <button className="absolute top-[60%] right-12 text-2xl">
                <FaEye onClick={() => setConfirmPassword(!confirmPassword)} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
