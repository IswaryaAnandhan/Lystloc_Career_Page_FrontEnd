import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card p-3">
        <h3 className="card-title fw-bold">{job.title}</h3>
        <p className="card-text">Experience: {job.experience}</p>
        <div className="row">
          <div className="col-md-4">
            <p className=" text-primary"> {job.openings} Openings</p>
          </div>

          <div className=" col-md-4">
            {" "}
            <button type="button" class="btn btn-primary btn-sm">
              Explore more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
