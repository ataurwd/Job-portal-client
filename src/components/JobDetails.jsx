import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJob = useLoaderData();
    const { companyLogo, jobTitle, jobType} = singleJob;
    return (
        <div>
            <div className='grid place-items-center'>
                <img src={companyLogo} alt="" />
                <h1>{jobTitle}</h1>
                <p>{jobType}</p>
                <Link >
                    <button className='bg-mainPrimary text-white px-3 py-1 rounded-md mt-3'> Apply For This Job</button>
                </Link>
           </div>
        </div>
    );
};

export default JobDetails;