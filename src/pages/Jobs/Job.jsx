import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios  from 'axios';

const Job = () => {
  const [jobData, setData] = useState([])
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/added-jobs" ,{withCredentials: true})
      .then((res) => {
        setData(res.data); 
        // setFilter(res.data); 
      })
  }, []);

  
  // useEffect(() => {
  //   if (search) {
  //     fetch(`http://localhost:3000/search?title=${search}`)
  //       .then((res) => res.json())
  //       .then((data) => setFilter(data))
  //       .catch((err) => console.error("Error fetching filtered jobs:", err));
  //   } else {
  //     setFilter(jobData);
  //   }
  // }, [search, jobData]); 

  return (
    <div className="bg-mainSecondary pt-4">
      <div className="md:w-[400px] md:mx-auto mt-5 mx-3">
        <input
          autoComplete="off"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          placeholder="Search Jobs..."
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="flex flex-col justify-center items-center lg:mt-14 md:mt-10 mt-5 space-y-3">
        <h1 className="font-headingFont font-bold md:text-4xl text-2xl">
          Recent Job Circulars
        </h1>
        <p className="text-gray-500">
          Many desktop publishing packages and web page editors
        </p>
      </div>
      <div className="lg:px-24 md:px-14 px-3 grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 lg:py-10 md:py-5 my-2">
        {jobData.map((job) => (
          <Link
            to={`/jobs/${job._id}`}
            key={job._id}
            className="bg-white p-5 space-y-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            <img
              className="w-20 h-20 rounded-full object-cover transition-transform duration-300 hover:scale-110"
              src={job.companyLogo}
              alt=""
            />
            <h1 className="font-bold font-headingFont text-2xl text-gray-800 transition-all duration-300 hover:text-blue-600">
              {job.jobTitle}
            </h1>
            <p>
              <span className="font-semibold text-gray-600">Job Type: </span>
              {job.jobType}
            </p>
            <p>
              <span className="font-semibold text-gray-600">Job Category:</span>{" "}
              {job.category}
            </p>
            <p className="mb-4">
              <span className="font-semibold text-gray-600">
                Application Deadline:{" "}
              </span>{" "}
              {job.deadline}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Job;
