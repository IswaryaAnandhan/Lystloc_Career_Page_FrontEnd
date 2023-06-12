import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        <h3 className="card-title fw-bold">{job.job_title}</h3>
        <p className="card-text">
          Experience: {job.exp_from} to {job.exp_to}
        </p>
        <div className="row">
          <div className="col-md-4">
            <p className=" text-primary">{job.job_openings} Openings</p>
          </div>
          <div className=" col-md-4 right">
            <Link to={`/job/${job.job_id}`}>Explore more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
