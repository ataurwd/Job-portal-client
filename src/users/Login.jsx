import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { loginAuth, setUser,googleLogin } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  
  const handelLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    loginAuth(email, password)
      .then(res => {
        setUser(res.user)
        // navigate(location?.state ? location.state : '/')
        // const user = {email: email}
        // axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
        //   .then(data => {
        //   console.log(data)
        // })
      })
    .catch(err => console.log(err))
  }

  const handelGoogleLogin = () => { 
    googleLogin()
      .then(res => {
        setUser(res.user)
        navigate(location?.state ? location.state : '/')
      })
     .catch(err => console.log(err))
  }
  return (
    <div className="flex h-[90vh] items-center justify-center md:p-0">
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md">
        {/* design side  */}
        <div className="relative hidden items-center justify-center md:flex md:w-[50%]">
         <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg" alt="" />
        </div>
        {/* form side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
          <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-mainPrimary font-headingFont">
            Login Now
          </h2>
          <form onSubmit={handelLogin} className="flex w-full flex-col items-center justify-center gap-4">
            <input
              className="w-[80%] rounded-lg border border-Maintext-mainPrimary bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="w-[80%] rounded-lg border border-Maintext-mainPrimary bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-[14px] text-gray-400">
              Do not have an account ?{" "}
              <Link to={'/register'} className="text-mainPrimary">
                Create one
              </Link>
            </p>
            <button
              className="uppercase w-[80%] rounded-lg bg-mainPrimary px-6 py-2 font-medium text-white outline-none md:w-[60%]"
              type="submit"
            >
              Submit
            </button>
          </form>
          {/* divider  */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1 border-Maintext-mainPrimary" />
            <div className="mx-4 text-mainPrimary">OR</div>
            <hr className="flex-1 border-Maintext-mainPrimary" />
          </div>
          {/* sign with google */}
          <button onClick={handelGoogleLogin} className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-Maintext-mainPrimary">
            <div className="relative z-20 flex h-full items-center bg-Maintext-mainPrimary px-4 text-lg text-mainPrimary duration-300 group-hover:bg-transparent group-hover:text-mainPrimary">
              Signin with
            </div>
            <span className="flex h-full items-center px-4 text-xl font-bold text-white duration-300 group-[]:bg-mainPrimary group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="size-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
