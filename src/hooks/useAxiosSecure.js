import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const useAxiosSecure = () => {
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "https://sports-server-two.vercel.app",
    // baseURL: "https://sports-server-two.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
       (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          logout()
          navigate("/signIn");
        }
        return Promise.reject(error);
        
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
