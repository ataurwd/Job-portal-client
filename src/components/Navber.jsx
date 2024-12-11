import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate()
  
  const handelLogout = () => {
    logout()
      .then(() => {
      navigate("/")
    })
  }
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white lg:px-20 md:px-10 px-2">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link
          to="/"
          className=" normal-case text-xl font-headingFont"
        >
          JobPulse
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-jobs"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Add Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/candidates"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Candidates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <button onClick={handelLogout} className="btn bg-mainPrimary text-white btn-sm"> logout</button>
        ) : (
          <NavLink to="/login" className="btn bg-mainPrimary text-white btn-sm">
            + Login Now
          </NavLink>
        )}

        {/* Dropdown for Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="btn btn-ghost">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" className="btn btn-ghost">
                All Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to="/employers-details" className="btn btn-ghost">
                Employers Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/candidates" className="btn btn-ghost">
                Candidates
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="btn btn-ghost">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
