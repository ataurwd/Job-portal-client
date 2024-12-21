import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const myAxios = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate  = useNavigate()
  useEffect(() => {
    myAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        console.log(err.response);
        if (err.response.status === 401 || err.response.status === 403) {
            // logout need to login
            logOut();
            navigate ('/login')
        }
      }
    );
  }, [logOut, navigate ]);
    return myAxios;
};

export default useAxiosSecure;
