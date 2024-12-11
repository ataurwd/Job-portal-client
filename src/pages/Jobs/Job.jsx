import React from "react";

const Job = () => {
  return (
    <div>
      <div className="md:w-[400px] md:mx-auto mt-5 mx-3">
        <input
          autoComplete="off"
          type="text"
          name="search"
          placeholder="Search Jobs..."
          className="input input-bordered w-full"
          required
        />
      </div>
    </div>
  );
};

export default Job;
