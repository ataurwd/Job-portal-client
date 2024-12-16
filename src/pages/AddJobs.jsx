import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const AddJobs = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const form = e.target;
    
    const jobTitle = form.jobTitle.value;
    const location = form.location.value;
    const jobType = form.jobType.value;
    const category = form.category.value;
    const deadline = form.deadline.value;  
    const responsibilities = form.responsibilities.value;
    const requirements = form.requirements.value;
    const description = form.description.value;
    const minSalary = form.minSalary.value;
    const maxSalary = form.maxSalary.value;
    const currency = form.currency.value;
    const companyName = form.companyName.value;
    const companyEmail = form.companyEmail.value;
    const companyPhoto = form.companyPhoto.value;
    
    const formData = {
      jobTitle,
      location,
      jobType,
      category,
      deadline,
      responsibilities,
      requirements,
      description,
      minSalary,
      maxSalary,
      currency,
      companyName,
      companyEmail,
      companyPhoto,
    };
    
    console.log(formData);
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
      <h2 className="text-3xl font-bold text-center mb-6">Post a Job</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">

        {/* Job Details Section */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-semibold">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="Title"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-semibold">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jobType" className="block text-sm font-semibold">
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                className="input input-bordered w-full"
              >
                <option value="fullTime">Full-Time</option>
                <option value="partTime">Part-Time</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-semibold">
                Job Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-semibold">
              Application Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="input input-bordered w-full"
            />
          </div>
        </section>

        {/* Job Description Section */}
        <section className="space-y-6 mt-8">
          <div>
            <label
              htmlFor="responsibilities"
              className="block text-sm font-semibold"
            >
              Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              className="input input-bordered w-full h-32"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-semibold"
            >
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              className="input input-bordered w-full h-32"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="input input-bordered w-full h-32"
            ></textarea>
          </div>
        </section>

        {/* Salary Information Section */}
        <section className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="minSalary"
                className="block text-sm font-semibold"
              >
                Minimum Salary
              </label>
              <input
                type="number"
                id="minSalary"
                name="minSalary"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label
                htmlFor="maxSalary"
                className="block text-sm font-semibold"
              >
                Maximum Salary
              </label>
              <input
                type="number"
                id="maxSalary"
                name="maxSalary"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="currency" className="block text-sm font-semibold">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="input input-bordered w-full"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              {/* Add other currencies as needed */}
            </select>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="space-y-6 mt-8">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-semibold"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label
              htmlFor="companyEmail"
              className="block text-sm font-semibold"
            >
              Company Email
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label
              htmlFor="companyPhoto"
              className="block text-sm font-semibold"
            >
              Company Logo
            </label>
            <input
              type="text"
              id="companyPhoto"
              name="companyPhoto"
              placeholder="your company Logo Url"
              className="input input-bordered w-full"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-white font-semibold"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
