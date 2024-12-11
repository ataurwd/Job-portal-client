import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const AddJobs = () => {
  const [timeDate, setTimeDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const companyLogo = form.companyLogo.value;
    const location = form.location.value;
    const jobType = form.jobType.value;
    const category = form.category.value;
    const deadline = timeDate.toLocaleDateString("en-CA");
    const formData = {companyLogo, jobTitle, location, jobType, category, deadline };

    axios.post("http://localhost:3000/add-job", formData).then((data) => {
      console.log(data.data);
      form.reset();
      Swal.fire({
        title: "Job added successfully",
        text: "you can now see then job in the all jobs list",
        icon: "success"
      });
    });
  };

  return (
    <div>
      {/* for job added form */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Job Posting Form
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Job Title */}
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title
            </label>
            <input
              placeholder="Add Job Title"
              type="text"
              id="jobTitle"
              name="jobTitle"
              //   onChange={(e) => setJobTitle(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* company Logo */}
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Company Logo
            </label>
            <input
              placeholder="Company Logo img URL"
              type="text"
              id="jobTitle"
              name="companyLogo"
              //   onChange={(e) => setJobTitle(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              placeholder="Job Location"
              type="text"
              id="location"
              name="location"
              //   onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Type */}
          <div className="mb-4">
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700"
            >
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              //   onChange={(e) => setJobType(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="fullTime">Full-Time</option>
              <option value="partTime">Part-Time</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              //   onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Application Deadline */}
          <div className="mb-4 w-full">
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Application Deadline
            </label>
            <DatePicker
              className="input input-bordered w-auto mt-3"
              selected={timeDate}
              onChange={(date) => setTimeDate(date)}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Job Posting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
