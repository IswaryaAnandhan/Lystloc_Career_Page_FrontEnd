// JobDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobDetails();
  }, []);

  const getJobDetails = async () => {
    try {
      const response = await axios.post("https://lystloc-career-page-backend.onrender.com/get_job", {
        job_id: jobId,
      });
      setJob(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <Link to="/" className="p-3 text-primary">
        Go Back
      </Link>
      <h2 className="fw-bold mt-3 p-3">{job.job_title}</h2>
      <div className="row">
        <div className="col-md-6">
          <h5 className="right">
            Experience: {job.exp_from} - {job.exp_to} Years
          </h5>
          <h5 className="right">Work Location: {job.work_loc}</h5>
        </div>
        <div className="col-md-6">
          <button className="btn btn-warning">Apply Now</button>
        </div>
      </div>
      <h4 className="fw-bold mt-3 p-3">Job Description :</h4>
      <p className="right "> {job.job_desc}</p>
    </div>
  );
};

export default JobDetails;
