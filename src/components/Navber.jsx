import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white lg:px-20 md:px-10 px-2">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-headingFont">
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
              Find Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employers-details"
              className={({ isActive }) => (isActive ? "text-gray-400" : "")}
            >
              Employers Details
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
        <NavLink to="/login" className="btn bg-mainPrimary text-white btn-sm">
          + Login Now
        </NavLink>

        {/* Dropdown for Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <i className="icofont-navigation-menu text-xl"></i>
          </label>
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
                Find Jobs
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
