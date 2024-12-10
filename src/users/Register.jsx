import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-base-200">
      {/* Left Side: Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src="https://via.placeholder.com/500"
          alt="Registration Visual"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Form */}
      <div className="lg:w-1/2 w-full px-8 lg:px-16 py-12 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Register</h2>
        <form className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
