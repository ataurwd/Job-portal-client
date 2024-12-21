/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import axios from "axios";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState('');
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchAllJobs = async () => {
      fetch(`http://localhost:9000/all-jobs-data?filter=${filteredJobs}&search=${search}&sort=${sort}`)
        .then((res) => res.json())
        .then((data) => setJobs(data));
    };

    fetchAllJobs();
  }, [filteredJobs, search, sort]);

  const handelReset = () => {
    setFilteredJobs('');
    setSearch('');
    setSort('');
  }


  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-lg"
              onChange={(e) => setFilteredJobs(e.target.value)}
              value={filteredJobs}
            >
              <option value="">Filter By Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By Deadline</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button onClick={handelReset} className="btn">Reset</button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((job) => (
            <JobCard job={job} key={job._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
