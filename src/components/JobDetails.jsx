import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const singleJob = useLoaderData();
    console.log(singleJob)
    return (
        <div>
            details {singleJob._id}
        </div>
    );
};

export default JobDetails;