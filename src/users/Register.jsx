import Lottie from "lottie-react";
import React, { useContext } from "react";
import animation from "../../src/lottie/register.json";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const handelRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then((user) => {
        console.log(user.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="z-10 flex flex-col lg:flex-row items-center justify-center md:h-[90vh]">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 w-[500px] flex justify-center">
        <Lottie animationData={animation} loop={true} />
      </div>

      {/* Right Side: Form */}
      <div className="lg:w-1/2 w-full px-8 lg:px-16 pb-12 bg-base-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-0">Register</h2>
        <form onSubmit={handelRegisterForm} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full border-mainPrimary"
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered w-full border-mainPrimary"
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full border-mainPrimary"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full border-mainPrimary"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn bg-mainPrimary text-white w-full">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
